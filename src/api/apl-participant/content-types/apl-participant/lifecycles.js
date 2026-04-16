'use strict';

/**
 * @param {any} value
 */
function normalizePriceToMillions(value) {
  if (value === null || value === undefined || value === '') return null;

  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return null;
  if (numeric <= 0) return 0;

  // Backward compatibility: if value looks like rupees, convert to millions.
  if (numeric >= 1000) {
    return Number((numeric / 1000000).toFixed(2));
  }

  return Number(numeric.toFixed(2));
}

/**
 * @param {Record<string, any> | undefined} data
 */
function normalizeSoldAt(data) {
  if (!data || !Object.prototype.hasOwnProperty.call(data, 'sold_at')) return;
  data.sold_at = normalizePriceToMillions(data.sold_at);
}

module.exports = {
  /**
   * @param {{ params: { data: Record<string, any> } }} event
   */
  async beforeCreate(event) {
    normalizeSoldAt(event.params.data);

    // Auto-assign manual order for new entries
    const { data } = event.params;
    if (data.order === undefined || data.order === null) {
      try {
        const entries = await strapi.entityService.findMany(
          'api::apl-participant.apl-participant',
          {
            sort: ['order:desc'],
            limit: 1,
            select: ['order']
          }
        );

        const topEntry = Array.isArray(entries) ? entries[0] : entries;
        const maxOrder = topEntry?.order ?? 0;
        data.order = maxOrder + 1;
      } catch (err) {
        // Fallback if query fails
        console.error('Error auto-assigning order to apl-participant:', err);
        data.order = 0;
      }
    }
  },

  /**
   * @param {{ params: { data: Record<string, any> } }} event
   */
  beforeUpdate(event) {
    normalizeSoldAt(event.params.data);
  },
};
