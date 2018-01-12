var express = require('express');
var router = express.Router();
const knex = require('../knex')

router.get('/', (req, res, next) => {
  // code goes here
  knex('messages')
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
})

router.post('/', (req, res, next) => {
  const { userId, message } = req.body
  console.log('user id from post: ', userId);
  console.log('message from post: ', message);
  // code goes here
  knex('messages')
    .insert({ user_id: userId, message: message },'*')
    .then(data => {
      console.log('data new message: ', data);
      let newMessage = {
        id: data[0].id,
        userId: data[0].user_id,
        message: data[0].message
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(newMessage))
    })
})

router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const { item } = req.body
  // code goes here
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  // code goes here
})

module.exports = router;
