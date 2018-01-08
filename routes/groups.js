var express = require('express')
var router = express.Router()
const knex = require('../knex')

router.get('/', (req, res, next) => {
  // code goes here
  knex('groups')
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
  knex('groups')
    .select('*')
    .where('id', id)
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.post('/', (req, res, next) => {
  const { name, teams } = req.body
  // code goes here
  knex('groups')
    .insert(
      {
        name: name,
        teams: teams
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
  const { name, team } = req.body
  // code goes here
  knex('groups')
    .where('id', id)
    .returning('*')
    .update({
      name: name,
      team: team
    })
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  // code goes here
  knex('groups')
    .where('id', id)
    .del()
    .returning('*')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

module.exports = router
