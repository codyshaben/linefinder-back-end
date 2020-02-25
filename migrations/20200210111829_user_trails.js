
exports.up = function(knex) {
    return knex.schema.createTable('user_trails', table => {
        table.increments('id').primary();
        table.integer('user_id').references('user.id');
        table.integer('trail_id').references('trail.trail_id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_trails')
};
