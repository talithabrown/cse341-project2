const routes = require('express').Router();

const authCheck = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
};

routes.get('/', authCheck, (req, res) => {
  res.render('profile', { user: req.session.user, message: req.session.message });
  delete req.session.message;
  req.session.save();
});

module.exports = routes;
