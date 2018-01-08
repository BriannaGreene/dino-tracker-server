var express = require('express')
var router = express.Router()
const knex = require('../knex')

router.get('/', (req, res, next) => {
  // code goes here
  knex('tickets')
    .select('*')
    .orderBy('id')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
  // .catch((err) => next(err))
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
