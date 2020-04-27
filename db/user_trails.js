const knex = require('./knex')
const UserTrails = require('../models/UserTrails')


module.exports = {
    getUserTrails: () => UserTrails.query(),

    addUserTrails: (user_trail) => UserTrails
        .query()
        .insert(user_trail, 'id')
        .then(user_trail => user_trail.id),

    deleteUserTrails: (id) => UserTrails
        .query()
        .delete()
        .where('id', id)
}