var knex = require('./knex')

module.exports = {
  getUsers: function() {
    return knex('users').select()
  },
  getTrails: function() {
    return knex('trail').select()
  },
  getFiveStarTrails: function() {
    return knex('trail').where('stars', 5)
  },
  getFourStarTrails: function() {
    return knex('trail').whereBetween('stars', [4, 4.9])
  },
  getThreeStarTrails: function() {
    return knex('trail').whereBetween('stars', [3, 3.9])
  },
  getTwoStarTrails: function() {
    return knex('trail').whereBetween('stars', [2, 2.9])
  },
  getOneStarTrails: function() {
    return knex('trail').whereBetween('stars', [1, 1.9])
  },
  getDoubleBlackTrails: function() {
    return knex('trail').where('difficulty', 'dblack')
  },
  getBlackTrails: function() {
    return knex('trail').where('difficulty', 'black')
  },
  getBlueBlackTrails: function() {
    return knex('trail').where('difficulty', 'blueBlack')
  },
  getBlueTrails: function() {
    return knex('trail').where('difficulty', 'blue')
  },
  getGreenBlueTrails: function() {
    return knex('trail').where('difficulty', 'greenBlue')
  },
  getGreenTrails: function() {
    return knex('trail').where('difficulty', 'green')
  }

}