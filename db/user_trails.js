const knex = require('./knex')
const UserTrails = require('../models/user_trails')


module.exports = {
    getUserTrails: () => UserTrails.query(),

    getUserTrailsByUserId: (id) => UserTrails
        .query()
        .where('userId', id),

    addUserTrails: (userTrail) => UserTrails
        .query()
        .insert(userTrail)
        .then(userTrail => userTrail.id),

    deleteUserTrails: (id) => UserTrails
        .query()
        .delete()
        .where('trailId', id)
}