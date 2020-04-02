const knex = require('../db/knex')
const User = require('../models/User')
const Trail = require('../models/Trail')

module.exports = {
  getUsers: () =>  User.query(),

  createUser: (user) => User.query().insert(user, 'id').then(ids => {
    return ids[0];
  }),

  getUserById: (id) => User
    .query()
    .where('id', id)
    .first()
    .withGraphFetched('trails'),

  addUserTrails: (user_trails) => knex('user_trails').insert(user_trails, '*'),
  
  getTrails: () => Trail.query(),

  getFiveStarTrails: () => Trail.query().where('stars', 5),

  getFourStarTrails: () => Trail.query()
    .where('stars', '<', '4.9')
    .where('stars', '>', '3.9')
    .orderBy('stars', 'desc'),

  getThreeStarTrails: () => Trail.query()
    .where('stars', '<', '3.9')
    .where('stars', '>', '2.9')
    .orderBy('stars', 'desc'),

  getTwoStarTrails: () => Trail.query()
    .where('stars', '<', '2.9')
    .where('stars', '>', '1.9')
    .orderBy('stars', 'desc'),

  getOneStarTrails: () => Trail.query()
    .where('stars', '<', '1.9')
    .where('stars', '>', '0.9')
    .orderBy('stars', 'desc'),

  getDoubleBlackTrails: () => Trail.query().where('difficulty', 'dblack'),

  getBlackTrails: () => Trail.query().where('difficulty', 'black'),

  getBlueTrails: () => Trail.query().where('difficulty', 'blue'),

  getGreenTrails: () => Trail.query().where('difficulty', 'green'),
}