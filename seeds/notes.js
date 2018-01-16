
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          note: 'Hello, my name is Bri, Bri Greene!',
          user_id: 11
        },
        {
          id: 2,
          note: 'Nimble Status: FINISHED!',
          user_id: 11
        },
        {
          id: 3,
          note: 'how many sticky notes fit on this holder?',
          user_id: 11
        },
        {
          id: 4,
          note: 'Call Jenny, Bark!',
          user_id: 11
        },
        {
          id: 5,
          note: 'make a presentation video',
          user_id: 11
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('notes_id_seq', (SELECT MAX(id) FROM notes))")
    })
};
