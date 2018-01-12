var express = require('express');
var router = express.Router();
const knex = require('../knex')

router.get('/', (req, res, next) => {
  // code goes here
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
  // code goes here
  // code goes here
  knex('notes')
    .select('*')
    .where('user_id', userId)
    .orderBy('id')
    .then(data => {
      console.log('data from route: ', data);
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.post('/', (req, res, next) => {
  console.log('SITCKY ROUTE: ', req.body);
  const { note, userId } = req.body
  console.log('COMING TO STICKY POST ', note);
  console.log('COMING TO STICKY ID', userId);
  // code goes here
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
  // code goes here
  // code goes here
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
  console.log('COMING TO DELETE:', id);
  // code goes here
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
