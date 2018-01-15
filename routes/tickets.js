var express = require('express')
var router = express.Router()
const knex = require('../knex')

router.get('/', (req, res, next) => {
  const user = req.params
  knex('tickets')
    .select('*')
    .orderBy('id')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
  .catch((err) => next(err))
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  // code goes here
  knex('tickets')
    .select('*')
    .where('id', id)
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.get('/user/:id', (req, res, next) => {
  // refactor route to use user id instead of 2!!!!!
  const id = parseInt(req.params.id)
  // console.log('USER ID: ', id, typeof(id));
  knex('tickets')
    .select('*')
    .then(data => {
      // console.log(data);
      let userTickets = data.filter(obj => {
        let assignees = obj.assignees.assignees
        for (var i = 0; i < assignees.length; i++) {
          if (assignees[i] == id) {
            return assignees[i]
          }
        }
      })
      // console.log('user tickets: ', userTickets);
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(userTickets))
    })
})

router.post('/', (req, res, next) => {
  const {
    title,
    description,
    status,
    labels,
    team,
    assignees,
    priority
  } = req.body
  // code goes here
  knex('tickets')
    .insert(
      {
        title: title,
        description: description,
        status: status,
        labels: labels,
        team: team,
        assignees: assignees,
        priority: priority
      },
      '*'
    )
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const {
    title,
    description,
    status,
    labels,
    team,
    assignees,
    hoursComplete,
    hoursToComplete,
    priority
  } = req.body
  // code goes here
  knex('tickets')
    .where('id', id)
    .returning('*')
    .update({
      title: title,
      description: description,
      status: status,
      labels: labels,
      team: team,
      assignees: assignees,
      hours_complete: hoursComplete,
      hours_to_complete: hoursToComplete,
      priority: priority
    })
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  // code goes here
  knex('tickets')
    .where('id', id)
    .del()
    .returning('*')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

module.exports = router
