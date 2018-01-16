const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
// const keys = require('../config/keys')
const knex = require('../knex')
require('dotenv').config()

passport.initialize()

passport.serializeUser((user, done) => {
  console.log('SERIALIZE: ', user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('DESERIALIZE: ', id);
  knex('users')
    .where('id', id)
    .then(user => {
      done(null, user)
    })
});

passport.use(new GoogleStrategy(
  {
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('GOOGLE STRAT: ', profile.id);
    knex('users')
      .where('auth_profile', profile.id)
      .first()
      .then(user => {
        if (!user) {
          console.log('NEW USER');
          knex('users')
            .insert({
              first_name: profile.name.givenName,
              last_name: profile.name.familyName,
              auth_client: 'google',
              auth_profile: profile.id
            }, '*')
            .then(newUser => {
              done(null, newUser[0])
            })
        }
        else {
          console.log('CURRENT USER', user.id);
          done(null, user)
        }
      })
  }
))
