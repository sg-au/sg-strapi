'use strict';

/**
 * gym-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gym-status.gym-status');
