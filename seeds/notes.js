
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          note: 'hello my name is Bri, BumbleBri!!',
          user_id: 11
        },
        {
          id: 2,
          note: 'this note is just a test',
          user_id: 11
        },
        {
          id: 3,
          note: 'I like stickies and I like colors',
          user_id: 11
        },
        {
          id: 4,
          note: 'Call Jenny, Bark Bark!!',
          user_id: 11
        },
        {
          id: 5,
          note: 'how many sticky notes fit on a sticky note holder?',
          user_id: 11
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('notes_id_seq', (SELECT MAX(id) FROM notes))")
    })
};
