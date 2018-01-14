
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
          assignees: { "assignees": [1, 2, 11] },
          hours_complete: 20,
          hours_to_complete: 20
        },
        {
          id: 2,
          title: 'over half way',
          description: 'develop super awesome development skills',
          labels: { "labels": ["blue"] },
          team: 'g68',
          assignees: { "assignees": [4, 11] },
          hours_complete: 0,
          hours_to_complete: 1
        },
        {
          id: 3,
          title: 'get jobs',
          labels: { "labels": ["yellow"] },
          team: 'g62',
          assignees: { "assignees": [3, 11] },
          hours_complete: 0,
          hours_to_complete: 5
        },
        {
          id: 4,
          title: 'present capstones',
          description: 'present awesome projects infront of everyone',
          status: 'in progress',
          labels: { "labels": ["red"] },
          team: 'g62',
          assignees: { "assignees": [11] },
          hours_complete: 2,
          hours_to_complete: 4
        },
        {
          id: 5,
          title: 'add nicer style to Nimble',
          description: 'make it look pretty',
          status: 'in progress',
          labels: { "labels": ["red", "purple", "yellow", "greene"] },
          team: 'g62',
          assignees: { "assignees": [11] },
          hours_complete: 1,
          hours_to_complete: 5
        },
        {
          id: 6,
          title: 'add sticky note feature',
          description: 'is this going to be a sticky note or a note pad?',
          status: 'in progress',
          labels: { "labels": ["pink", "greene", "aqua"] },
          team: 'g62',
          assignees: { "assignees": [11, 9] },
          hours_complete: 10,
          hours_to_complete: 15
        },
        {
          id: 7,
          title: 'add time and weather feature',
          description: 'youre gonna need an api for that',
          status: 'in progress',
          labels: { "labels": ["red", "orange", "yellow"] },
          team: 'g62',
          assignees: { "assignees": [11] },
          hours_complete: 3,
          hours_to_complete: 6
        },
        {
          id: 8,
          title: 'add redux',
          description: 'separate reducers and actions',
          status: 'done',
          labels: { "labels": ["pink", "purple", "midblue"] },
          team: 'g62',
          assignees: { "assignees": [11, 8] },
          hours_complete: 10,
          hours_to_complete: 10
        },
        {
          id: 9,
          title: 'add react router dom',
          description: 'routing for components',
          status: 'done',
          labels: { "labels": ["yellow", "darkblue", "greene", "orange"] },
          team: 'g62',
          assignees: { "assignees": [11] },
          hours_complete: 5,
          hours_to_complete: 5
        },
        {
          id: 10,
          title: 'making the CRUD',
          description: 'backend api links to database',
          status: 'done',
          labels: { "labels": ["yellow", "red", "aqua"] },
          team: 'g62',
          assignees: { "assignees": [11] },
          hours_complete: 5,
          hours_to_complete: 5
        },
        {
          id: 11,
          title: 'dinosaur avatars',
          description: 'the cuteness',
          labels: { "labels": ["purple", "red"] },
          team: 'g62',
          assignees: { "assignees": [11] },
          hours_complete: 0,
          hours_to_complete: 7
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tickets_id_seq', (SELECT MAX(id) FROM tickets))")
    })
};
