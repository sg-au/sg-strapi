'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::apl-participant.apl-participant', {
  /**
   * @param {Record<string, any>} params
   */
  async find(params = {}) {
    const query = { ...params };

    // Set default sorting by order field if not already specified.
    if (!query.sort) {
      query.sort = ['order:asc', 'id:asc'];
    }

    return super.find(query);
  }
});
