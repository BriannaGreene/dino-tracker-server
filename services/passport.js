const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const knex = require('../knex')

passport.initialize()

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('access token: ', accessToken)
    console.log('refresh token: ', refreshToken);
    console.log('profile: ', profile);
    let currentUser = {}

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
              currentUser.id = newUser.id
            })
        }
        else {
          currentUser.id = user.id
        }
      })
      .then(() => {
        return done(null, currentUser)
      })
  }
))

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
