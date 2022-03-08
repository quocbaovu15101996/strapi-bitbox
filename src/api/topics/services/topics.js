'use strict';

/**
 * topics service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::topics.topics');
