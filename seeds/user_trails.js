
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_trails').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_trails').insert([
        {userEmail: 'test33@gmail.com', trailId: 1},
        {userEmail: 'test33@gmail.com', trailId: 2},
        {userEmail: 'test33@gmail.com', trailId: 3}
      ]);
    });
};

