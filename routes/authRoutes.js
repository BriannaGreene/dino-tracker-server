const passport = require('passport')
const knex = require('../knex')

module.exports = (router) => {

  passport.initialize()

  router.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
  }))

  router.get('/auth/google/callback',
    passport.authenticate('google', { successRedirect: `${process.env.CLIENT}`, failureRedirect: `${process.env.CLIENT}` }))

  router.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect(`${process.env.CLIENT}`)
  })

  router.get('/api/current_user', (req, res) => {
    let newUser = [ {
    id: 11,
    first_name: 'Bri',
    last_name: 'Greene',
    user_name: null,
    auth_client: 'google',
    auth_profile: '100281854064436738613',
    avatar: 1,
    sticky: { notes: [] },
    admin: false,
    manager: false,
    group_id: null,
    team: null,
    created_at: '2018-01-16T00:27:48.113Z',
    updated_at: '2018-01-16T00:27:48.113Z' } ]
    res.send(newUser)
  })

}
