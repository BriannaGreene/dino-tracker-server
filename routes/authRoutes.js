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
    console.log('HITTING CURRENT USER');
    console.log(req.user);
    res.send(req.user)
  })
}


// [ anonymous {
//     id: 11,
//     first_name: 'Bri',
//     last_name: 'Greene',
//     user_name: null,
//     auth_client: 'google',
//     auth_profile: '100281854064436738613',
//     avatar: 1,
//     sticky: { notes: [] },
//     admin: false,
//     manager: false,
//     group_id: null,
//     team: null,
//     created_at: 2018-01-15T16:47:34.159Z,
//     updated_at: 2018-01-15T16:47:34.159Z } ]
