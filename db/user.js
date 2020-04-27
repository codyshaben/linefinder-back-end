const knex = require('./knex')
const User = require('../models/User')
// const Trail = require('../models/Trail')
const UserTrails = require('../models/UserTrails')

module.exports = {
    getUsers: () =>  User.query().withGraphFetched('trails'),

    create: (user) => User
        .query()
        .insert(user, 'id')
        .then(user => user.id),

    getUserByEmail: (email) => User
        .query()
        .where('email', email)
        .first()
        .withGraphFetched('trails'),

    getUserById: (id) => User
        .query()
        .where('id', id)
        .first()
        .withGraphFetched('trails'),
    
    addUserTrails: (user_trails) => UserTrails
        .query()
        .insert(user_trails, 'id')
        .then(user_trails => user_trails.id),

}