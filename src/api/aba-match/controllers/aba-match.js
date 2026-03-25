'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::aba-match.aba-match');
