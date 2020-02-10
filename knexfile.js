// Update with your config settings.

module.exports = {

  client: 'pg',

  development: {
    client: 'pg',
    connection: 'postgres://localhost/linefinder'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },

};
