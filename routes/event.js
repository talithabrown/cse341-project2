const routes = require('express').Router();
const events = require('../controllers/event.js');
const validation = require('../validation');

routes.get('/', events.findAll);

// Create a new event
routes.post('/', validation.addNew, events.create);

// Retrieve all events in a certain zip code
routes.get('/zip/:zip_code', events.findByZip);

// Retrieve a single event with id
routes.get('/:event_id', events.findOne);

// Update a event with id
routes.put('/:id', validation.updateOne, events.update);

// Delete a event with id
routes.delete('/:id', events.delete);

module.exports = routes;
