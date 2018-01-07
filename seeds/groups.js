exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        { id: 1,
          name: 'ABC Company',
          teams: {"teams": ['team A', 'team B', 'team C']}},
        { id: 2,
          name: 'Galvanize',
          teams: {"teams": ['g44', 'g49', 'g62', 'g68']}},
        { id: 3,
          name: 'Backflip Studios',
          teams: {"teams": ['DragonVale', 'DragonVale2']}}
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('groups_id_seq', (SELECT MAX(id) FROM groups))")
    })
};
