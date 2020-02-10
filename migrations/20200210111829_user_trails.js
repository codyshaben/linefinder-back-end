
exports.up = function(knex, Promise) {
    return Promise.all([ 
        knex.schema.createTable('user_trails', table => {
            table.increments('id').primary();
            table.integer('user_id').references('user.id');
            table.integer('trail_id').references('trail.id');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([ 
        knex.schema.dropTableIfExists('user_trails')
    ]);
};
