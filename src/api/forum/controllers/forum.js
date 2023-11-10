'use strict';

/**
 * forum controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::forum.forum');
