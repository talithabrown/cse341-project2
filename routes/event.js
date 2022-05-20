const routes = require('express').Router();
const events = require('../controllers/event.js');

routes.get('/', events.findAll);

// Create a new event
routes.post('/', events.create);

// // Retrieve all events in a certain zip code
// routes.get('/', events.findByZip)

// // Retrieve a single event with id
// routes.get('/:event_id', events.findOne);

// // Update a event with id
// routes.put('/:id', events.update);

// // Delete a event with id
// routes.delete('/:id', events.delete);

module.exports = routes;
