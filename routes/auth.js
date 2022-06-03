const routes = require('express').Router();
const passport = require('passport');

routes.get('/login', (req, res) => {
  res.render('login');
});

routes.get('/logout', (req, res) => {
  res.send('loggin out');
});

//auth with google
routes.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

//callback routes for google to redirect to
routes.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached the call back URI' + req.user);
  //res.redirect('/');
  console.log('you reached the call back URI');
});

module.exports = routes;

//(req, res) => {console.log('I AM HERE'); res.send('I AM HERE');}
