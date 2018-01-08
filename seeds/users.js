
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Brianna',
          last_name: 'Greene',
          user_name: 'hellobrigreene@gmail.com',
          password: 'password',
          admin: true,
          manager: true,
          group_id: 2,
          team: { "team": ['g49', 'g62', 'g68']}
        },
        {
          id: 2,
          first_name: 'Cat',
          last_name: 'P',
          user_name: 'catplevak',
          password: 'password',
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 3,
          first_name: 'Steph',
          last_name: 'Marvez',
          user_name: 'stephmarvez',
          password: 'password',
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g68']}
        },
        {
          id: 4,
          first_name: 'Melissa',
          last_name: 'Utomo',
          user_name: 'melissautomo',
          password: 'password',
          admin: true,
          manager: true,
          group_id: 2,
          team: { "team": ['g62','g68']}
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
};
