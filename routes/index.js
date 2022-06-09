const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const event = require('./event');
const profileRoutes = require('./profile');
//const user = require('./user');
const authRoutes = require('./auth');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());

routes.use('/events', event);
//routes.use('/users', user);
routes.use('/profile', profileRoutes);
routes.use('/auth', authRoutes);

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get('/', (req, res) => {
  res.render('home', { user: req.session.user });
});

module.exports = routes;
