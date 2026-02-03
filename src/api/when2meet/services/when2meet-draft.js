'use strict';

/**
 * semester-planner-sync service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::when2meet-draft.when2meet-draft');
