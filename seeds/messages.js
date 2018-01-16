exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { id: 1,
          user_id: 11,
          message: "My project is called 'Nimble'!"},
        { id: 2,
          user_id: 7,
          message: "who is using React with Redux for their project?"},
        { id: 3,
          user_id: 9,
          message: "I'm using redux and react-router!"},
        { id: 4,
          user_id: 1,
          message: "We need more Ken Heads!! Why is no one doing Ken Mode?!!"},
        { id: 5,
          user_id: 6,
          message: "Yes! More Ken Mode!"},
        { id: 6,
          user_id: 8,
          message: "Can anyone take some of my tickets?"},
        { id: 7,
          user_id: 5,
          message: "I can!"},
        { id: 8,
          user_id: 4,
          message: "How are everyone's capstone projects going?"
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages))")
    })
};
