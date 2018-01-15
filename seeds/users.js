
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Ken',
          last_name: 'Kotch',
          avatar: 2,
          sticky: { "notes": ['this is just a test note', 'hello?', 'call Jenny', 'whas up g62'] },
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 2,
          first_name: 'Cat',
          last_name: 'Plevak',
          avatar: 3,
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 3,
          first_name: 'Steph',
          last_name: 'Marvez',
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 4,
          first_name: 'Jonny',
          last_name: 'Hork',
          avatar: 4,
          admin: true,
          manager: true,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 5,
          first_name: 'Jamie',
          last_name: 'Tanzar',
          avatar: 5,
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 6,
          first_name: 'Chris',
          last_name: 'Smith',
          avatar: 6,
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 7,
          first_name: 'Gena',
          last_name: 'Isreal',
          avatar: 8,
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 8,
          first_name: 'Danah',
          last_name: 'Olivetree',
          avatar: 7,
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 9,
          first_name: 'Adam',
          last_name: 'Neef',
          avatar: 4,
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        },
        {
          id: 10,
          first_name: 'Craig',
          last_name: 'Quincy',
          avatar: 1,
          admin: false,
          manager: false,
          group_id: 2,
          team: { "team": ['g62']}
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
};
