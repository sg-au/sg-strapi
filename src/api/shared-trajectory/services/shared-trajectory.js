'use strict';

/**
 * shared-trajectory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shared-trajectory.shared-trajectory');
