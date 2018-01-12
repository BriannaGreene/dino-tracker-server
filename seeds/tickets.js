
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
          assignees: { "assignees": [1, 2, 11] }
        },
        {
          id: 2,
          title: 'over half way',
          description: 'develop super awesome development skills',
          labels: { "labels": [] },
          team: 'g68',
          assignees: { "assignees": [4, 11] }
        },
        {
          id: 3,
          title: 'get jobs',
          labels: { "labels": [] },
          team: 'g62',
          assignees: { "assignees": [3, 11] }
        },
        {
          id: 4,
          title: 'present capstones',
          description: 'present awesome projects infront of everyone',
          status: 'in progress',
          labels: { "labels": ["red"] },
          team: 'g62',
          assignees: { "assignees": [11] }
        },
        {
          id: 5,
          title: 'add nicer style to Jello',
          description: 'make it look pretty',
          status: 'in progress',
          labels: { "labels": ["red", "purple"] },
          team: 'g62',
          assignees: { "assignees": [11] }
        },
        {
          id: 6,
          title: 'add sticky note feature',
          description: 'is this going to be a sticky note or a note pad?',
          status: 'in progress',
          labels: { "labels": ["pink"] },
          team: 'g62',
          assignees: { "assignees": [11, 9] }
        },
        {
          id: 7,
          title: 'add time and weather feature',
          description: 'youre gonna need an api for that',
          status: 'in progress',
          labels: { "labels": [] },
          team: 'g62',
          assignees: { "assignees": [11] }
        },
        {
          id: 8,
          title: 'add redux',
          description: 'separate reducers and actions',
          status: 'done',
          labels: { "labels": ["pink", "purple"] },
          team: 'g62',
          assignees: { "assignees": [11, 8] }
        },{
          id: 9,
          title: 'add react router dom',
          description: 'routing for components',
          status: 'done',
          labels: { "labels": ["yellow"] },
          team: 'g62',
          assignees: { "assignees": [11] }
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tickets_id_seq', (SELECT MAX(id) FROM tickets))")
    })
};
