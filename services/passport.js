const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const knex = require('../knex')

// passport.initialize()

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('user from deserializeUser: ', user);
  knex('users')
    .where('id', id)
    .then(user => {
      done(null, user)
    })
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    knex('users')
      .where('auth_profile', profile.id)
      .first()
      .then(user => {
        console.log('USER FROM KNEX: ', user);
        if (!user) {
          knex('users')
            .insert({
              first_name: profile.name.givenName,
              last_name: profile.name.familyName,
              auth_client: 'google',
              auth_profile: profile.id
            }, '*')
            .then(newUser => {
              console.log('NEW USER FROM PASSPORT: ', newUser[0]);
              done(null, newUser[0])
            })
        }
        else {
          console.log('CURRENT USER FROM PASSPORT: ', user);
          done(null, user)
        }
      })
  }
))
