
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          id: 1,
          title: 'capstone projects',
          description: 'practice presenting capstones',
          status: 'done',
          labels: { "labels": ["pink", "purple"] },
          team: 'g62',
          assignees: { "assignees": [1, 2] }
        },
        {
          id: 2,
          title: 'over half way',
          description: 'develop super awesome development skills',
          team: 'g68',
          assignees: { "assignees": [3, 4] }
        },
        {
          id: 3,
          title: 'get jobs',
          team: 'g62',
          assignees: { "assignees": [1, 2] }
        },
        {
          id: 4,
          title: 'present capstones',
          description: 'present awesome projects infront of everyone',
          status: 'in progress',
          labels: { "labels": ["red"] },
          team: 'g62',
          assignees: { "assignees": [1, 2] }
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tickets_id_seq', (SELECT MAX(id) FROM tickets))")
    })
};
