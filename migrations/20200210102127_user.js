
exports.up = function(knex, Promise) {
  return Promise.all([
        knex.schema.createTable('user', table => {
            table.increments().primary();
            table.text('username').unique().notNullable();
            table.text('email').unique().notNullable();
            table.text('password').notNullable();
            table.datetime('created_at');
        })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('user')
  ]);
};
