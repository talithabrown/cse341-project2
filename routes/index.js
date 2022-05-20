const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const event = require('./event');
//const user = require('./user');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());

routes.use('/events', event);
//routes.use('/users', user);

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;
