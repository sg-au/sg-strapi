'use strict';

/**
 * shared-trajectory router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shared-trajectory.shared-trajectory');
