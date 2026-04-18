'use strict';

const WIN_POINTS = 3;
const DRAW_POINTS = 1;
const FORM_WINDOW = 5;

const toNumber = (value) => {
  if (value === null || value === undefined || value === '') return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const normalizeTeamId = (team) => {
  if (!team) return null;
  if (typeof team === 'number') return team;
  if (typeof team === 'object' && typeof team.id === 'number') return team.id;
  return null;
};

const isCompletedMatch = (match) => {
  if (match.status !== 'completed') return false;

  const aScore = toNumber(match.team_a_score);
  const bScore = toNumber(match.team_b_score);
  const teamAId = normalizeTeamId(match.team_a);
  const teamBId = normalizeTeamId(match.team_b);

  return teamAId !== null && teamBId !== null && aScore !== null && bScore !== null;
};

const recomputeAplStandings = async (strapi) => {
  const teams = await strapi.entityService.findMany('api::apl-team.apl-team', {
    fields: ['id'],
    pagination: { pageSize: 1000 },
  });

  const participants = await strapi.entityService.findMany('api::apl-participant.apl-participant', {
    fields: ['id'],
    pagination: { pageSize: 1000 },
  });

  const statsByParticipantId = new Map();
  for (const participant of participants) {
    statsByParticipantId.set(participant.id, { goals: 0, assists: 0 });
  }

  const statsByTeamId = new Map();
  for (const team of teams) {
    statsByTeamId.set(team.id, {
      matches_played: 0,
      matches_won: 0,
      matches_lost: 0,
      matches_tied: 0,
      points: 0,
      goals_for: 0,
      goals_against: 0,
      clean_sheets: 0,
      form: [],
    });
  }

  const matches = await strapi.entityService.findMany('api::apl-match.apl-match', {
    fields: ['id', 'status', 'team_a_score', 'team_b_score', 'start_time'],
    populate: {
      team_a: { fields: ['id'] },
      team_b: { fields: ['id'] },
      goal_events: {
        populate: {
          scorer: { fields: ['id'] },
          assister: { fields: ['id'] },
        },
      },
    },
    pagination: { pageSize: 10000 },
    sort: ['start_time:asc', 'id:asc'],
  });

  for (const match of matches) {
    if (!isCompletedMatch(match)) continue;

    const teamAId = normalizeTeamId(match.team_a);
    const teamBId = normalizeTeamId(match.team_b);
    const aScore = toNumber(match.team_a_score);
    const bScore = toNumber(match.team_b_score);

    const teamAStats = statsByTeamId.get(teamAId);
    const teamBStats = statsByTeamId.get(teamBId);
    if (!teamAStats || !teamBStats) continue;

    teamAStats.matches_played += 1;
    teamBStats.matches_played += 1;

    for (const event of match.goal_events || []) {
      const scorerId = event.scorer?.id;
      const assisterId = event.assister?.id;
      if (!event.is_penalty && scorerId && statsByParticipantId.has(scorerId)) {
        statsByParticipantId.get(scorerId).goals += 1;
      }
      if (assisterId && statsByParticipantId.has(assisterId)) {
        statsByParticipantId.get(assisterId).assists += 1;
      }
    }

    teamAStats.goals_for += aScore;
    teamAStats.goals_against += bScore;
    teamBStats.goals_for += bScore;
    teamBStats.goals_against += aScore;

    if (aScore === 0 && bScore === 0) {
      teamAStats.clean_sheets += 1;
      teamBStats.clean_sheets += 1;
    } else if (bScore === 0) {
      teamAStats.clean_sheets += 1;
    } else if (aScore === 0) {
      teamBStats.clean_sheets += 1;
    }

    if (aScore > bScore) {
      teamAStats.matches_won += 1;
      teamAStats.points += WIN_POINTS;
      teamAStats.form.push('W');

      teamBStats.matches_lost += 1;
      teamBStats.form.push('L');
    } else if (aScore < bScore) {
      teamBStats.matches_won += 1;
      teamBStats.points += WIN_POINTS;
      teamBStats.form.push('W');

      teamAStats.matches_lost += 1;
      teamAStats.form.push('L');
    } else {
      teamAStats.matches_tied += 1;
      teamBStats.matches_tied += 1;
      teamAStats.points += DRAW_POINTS;
      teamBStats.points += DRAW_POINTS;
      teamAStats.form.push('D');
      teamBStats.form.push('D');
    }
  }

  for (const [teamId, stats] of statsByTeamId.entries()) {
    const formLastFive = stats.form.slice(-FORM_WINDOW);

    await strapi.entityService.update('api::apl-team.apl-team', teamId, {
      data: {
        matches_played: stats.matches_played,
        matches_won: stats.matches_won,
        matches_lost: stats.matches_lost,
        matches_tied: stats.matches_tied,
        points: stats.points,
        goals_for: stats.goals_for,
        goals_against: stats.goals_against,
        clean_sheets: stats.clean_sheets,
        form_last_five: formLastFive,
      },
    });
  }
  for (const [participantId, stats] of statsByParticipantId.entries()) {
    await strapi.entityService.update('api::apl-participant.apl-participant', participantId, {
      data: {
        goals: stats.goals,
        assists: stats.assists,
      },
    });
  }
};

module.exports = {
  async afterCreate() {
    await recomputeAplStandings(strapi);
  },

  async afterUpdate() {
    await recomputeAplStandings(strapi);
  },

  async afterDelete() {
    await recomputeAplStandings(strapi);
  },
};
