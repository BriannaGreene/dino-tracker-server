var express = require('express');
var router = express.Router();
const knex = require('../knex')

router.get('/', (req, res, next) => {
  knex('notes')
    .select('*')
    .orderBy('id')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
    .catch((err) => next(err))
})

router.get('/:id', (req, res, next) => {
  const userId = req.params.id
  knex('notes')
    .select('*')
    .where('user_id', userId)
    .orderBy('id')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.post('/', (req, res, next) => {
  const { note, userId } = req.body
  knex('notes')
    .insert(
      { note: note, user_id: userId }, '*')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const { note } = req.body
  knex('notes')
    .where('id', id)
    .returning('*')
    .update({
      note: note
    })
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  knex('notes')
    .where('id', id)
    .del()
    .returning('*')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

module.exports = router;
