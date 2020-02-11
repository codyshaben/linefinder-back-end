var knex = require('./knex')

module.exports = {
  getUsers: function() {
    return knex('users').select()
  }
}