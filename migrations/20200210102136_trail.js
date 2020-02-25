
exports.up = function(knex) {
    return knex.schema.createTable('trail', table => {
        table.increments('trail_id').primary()
        table.integer('id')
        table.text('name')
        table.text('type')
        table.text('summary')
        table.text('difficulty')
        table.float('stars')
        table.integer('starVotes')
        table.text('location')
        table.text('url')
        table.text('imgSqSmall')
        table.text('imgSmall')
        table.text('imgSmallMed')
        table.text('imgMedium')
        table.float('length')
        table.integer('ascent')
        table.integer('descent')
        table.integer('high')
        table.integer('low')
        table.float('longitude')
        table.float('latitude')
        table.text('conditionStatus')
        table.text('conditionDetails').nullable()
        table.text('conditionDate')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('trail')
};
