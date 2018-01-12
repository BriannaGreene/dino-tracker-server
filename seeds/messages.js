exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { id: 1,
          user_id: 11,
          message: "first message"},
        { id: 2,
          user_id: 9,
          message: "who is using redux for their project"},
        { id: 3,
          user_id: 7,
          message: "I'm using redux!"},
        { id: 4,
          user_id: 1,
          message: "More Ken Heads!!"},
        { id: 5,
          user_id: 6,
          message: "More Ken Mode!!"}
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages))")
    })
};
