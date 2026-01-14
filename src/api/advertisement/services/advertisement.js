'use strict';

/**
 * advertisement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advertisement.advertisement');
