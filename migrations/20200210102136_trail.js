
exports.up = function(knex, Promise) {
    return Promise.all([ 
        knex.schema.createTable('trail', table => {
            table.increments('id').primary();
            table.integer('trail_id');
            table.text('name');
            table.text('location');
            table.text('summary');
            table.text('difficulty');
            table.float('stars');
            table.integer('reviews');
            table.text('image');
            table.float('length');
            table.integer('ascent');
            table.integer('high');
            table.integer('low');
            table.float('lng');
            table.float('lat');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([ 
        knex.schema.dropTableIfExists('trail')
    ]);
};
