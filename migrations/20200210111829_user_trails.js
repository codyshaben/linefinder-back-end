exports.up = function(knex) {
    return knex.schema.createTable('user_trails', table => {
        table.increments('id').primary();
        table.integer('userId').references('user.id')
        table.integer('trailId').references('trail.trail_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_trails')
};