'use strict';

/**
 * treasure-hunt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::treasure-hunt.treasure-hunt');
