'use strict';

/**
 * sg-mail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sg-mail.sg-mail');
