var express = require('express')
var router = express.Router()
const knex = require('../knex')

router.get('/', (req, res, next) => {
  knex('users')
    .select(
      'id',
      'first_name',
      'last_name',
      'user_name',
      'avatar',
      'sticky',
      'admin',
      'manager',
      'group_id',
      'team'
    )
    .orderBy('id')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('users')
    .select('*')
    .where('id', id)
    .then(data => {
      let user = {
        id: data[0].id,
        firstName: data[0].first_name,
        lastName: data[0].last_name,
        userName: data[0].user_name,
        admin: data[0].admin,
        manager: data[0].manager,
        groupId: data[0].group_id,
        team: data[0].team
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(user))
    })
})

router.post('/', (req, res, next) => {
  const {
    firstName,
    lastName,
    userName,
    password,
    admin,
    manager,
    groupId,
    team
  } = req.body
  knex('users')
    .insert(
      {
        first_name: firstName,
        last_name: lastName,
        user_name: userName,
        password: password,
        admin: admin,
        manager: manager,
        group_id: groupId,
        team: team
      },
      '*'
    )
    .then(data => {
      let newUser = {
        id: data[0].id,
        firstName: data[0].first_name,
        lastName: data[0].last_name,
        userName: data[0].user_name,
        admin: data[0].admin,
        manager: data[0].manager,
        groupId: data[0].group_id,
        team: data[0].team
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(newUser))
    })
})

router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const {
    firstName,
    lastName,
    userName,
    password,
    admin,
    manager,
    groupId,
    team
  } = req.body
  knex('users')
    .where('id', id)
    .returning('*')
    .update({
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      password: password,
      admin: admin,
      manager: manager,
      group_id: groupId,
      team: team
    })
    .then(data => {
      let updated = {
        id: data[0].id,
        firstName: data[0].first_name,
        lastName: data[0].last_name,
        userName: data[0].user_name,
        admin: data[0].admin,
        manager: data[0].manager,
        groupId: data[0].group_id,
        team: data[0].team
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(updated))
    })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  knex('users')
    .where('id', id)
    .del()
    .returning('*')
    .then(data => {
      let deleted = {
        id: data[0].id,
        name: data[0].user_name
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(updated))
    })
})

module.exports = router
