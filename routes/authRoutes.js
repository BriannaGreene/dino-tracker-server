const passport = require('passport')

module.exports = (router) => {
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
    res.send(req.user)
  })
}
