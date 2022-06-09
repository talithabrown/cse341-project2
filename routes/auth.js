const routes = require('express').Router();
const passport = require('passport');

routes.get('/login', (req, res) => {
  res.render('login', { user: req.session.user });
});

routes.get('/logout', (req, res) => {
  //res.send('loggin out');
  req.session.destroy();
  res.redirect('/');
});

//auth with google
routes.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

//callback routes for google to redirect to
routes.get('/google/redirect', passport.authenticate('google'), async (req, res) => {
  req.session.user = req.user;
  res.redirect('/profile/');
});

module.exports = routes;
