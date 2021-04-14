'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async getJoinRecipe(ctx) {
        const knex = strapi.connections.default;
        const resizes = await knex('recipes_sizes').where({
            recipe: ctx.params.id,
        })
        .join('recipes', 'recipes_sizes.recipe', 'recipes.id')
        .join('sizes', 'recipes_sizes.size', 'sizes.id')
        .select('recipes_sizes.prices', 'recipes.name')
        .select('recipes_sizes.id', 'sizes.size')
        return resizes;
    },
};
