
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
      table.increments('id').primary();
      table.text('username').unique().notNullable();
      table.text('email').unique().notNullable();
      table.text('password').notNullable();
      table.datetime('created_at');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
