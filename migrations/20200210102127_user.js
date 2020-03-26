
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
      table.increments('id').primary()
      table.text('first_name').notNullable();
      table.text('last_name').notNullable();
      table.text('email').unique().notNullable();
      table.text('password').notNullable();
      table.timestamp('created_at');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
