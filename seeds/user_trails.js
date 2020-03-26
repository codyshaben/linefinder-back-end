
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_trails').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_trails').insert([
        {userEmail: 'test1@gmail.com', trailId: 10},
        {userEmail: 'test1@gmail.com', trailId: 11},
        {userEmail: 'test1@gmail.com', trailId: 12}
      ]);
    });
};

