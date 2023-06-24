'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', () => ({
    async create(ctx) {        
        ctx.request.body.data = {
            ...ctx.request.body.data,
            author: ctx.state.user.id
        };

        const response = await super.create(ctx)

        return response
    }
}));
