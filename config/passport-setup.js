const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const db = require('../models');
const User = db.users;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user.id);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: '/auth/google/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user already exists
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // alerady have user
          console.log(`user is: ${currentUser}`);
          return done(null, currentUser);
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then((newUser) => {
              console.log('new user created:' + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
