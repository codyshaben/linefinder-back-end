
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {first_name: 'test', last_name: 'one', email: 'test@gmail1.com', password: 'test1', password_confirmation: 'test1'},
        {first_name: 'test', last_name: 'two', email: 'test@gmail2.com', password: 'test2', password_confirmation: 'test2'},
        {first_name: 'test', last_name: 'three', email: 'test@gmail3.com', password: 'test3', password_confirmation: 'test3'}
      ]);
    });
};
