
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {first_name: 'test', last_name: 'one', email: 'test1@gmail.com', password: 'test1'},
        {first_name: 'test', last_name: 'two', email: 'test2@gmail.com', password: 'test2'},
        {first_name: 'test', last_name: 'three', email: 'test3@gmail.com', password: 'test3'}
      ]);
    });
};
