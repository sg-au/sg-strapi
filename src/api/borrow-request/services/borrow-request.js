'use strict';

/**
 * borrow-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::borrow-request.borrow-request');
