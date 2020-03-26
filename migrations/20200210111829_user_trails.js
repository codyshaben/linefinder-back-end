
exports.up = function(knex) {
    return knex.schema.createTable('user_trails', table => {
        table.increments('id').primary();
        table.text('userEmail').references('user.email')
        table.integer('trailId').references('trail.trail_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_trails')
};
