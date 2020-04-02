const knex = require('./knex')
const User = require('../models/User')
const Trail = require('../models/Trail')

module.exports = {
    getUsers: () =>  User.query(),

    create: (user) => User.query().insert(user, 'id').then(user => user.id),

    getUserByEmail: (email) => User
        .query()
        .where('email', email)
        .first()
        .withGraphFetched('trails'),

    getUserById: (id) => User
        .query()
        .where('id', id)
        .first()
        .withGraphFetched('trails')
}