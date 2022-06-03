const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const event = require('./event');
//const user = require('./user');
const authRoutes = require('./auth');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());

routes.use('/events', event);
//routes.use('/users', user);
routes.use('/auth', authRoutes);

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.use('/', (req, res) => {
  res.send('You are home!');
});

module.exports = routes;
