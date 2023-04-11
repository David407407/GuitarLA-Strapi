'use strict';

/**
 * car-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-blog.car-blog');
