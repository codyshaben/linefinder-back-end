const knex = require('./knex')
const User = require('../models/user')

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
    
    addUserTrails: (userTrail) => User
        .relatedQuery('user_trails')
        .for(userTrail.userId)
        .insertGraph({ trails: userTrail })

}

// const fluffy = await Person.relatedQuery('pets')
//   .for(1)
//   .insert({ name: 'Fluffy' });