const routes = require('express').Router();
//const users = require('../controllers/user.js');

// routes.get('/', users.findAll);

// // Create a new user
// routes.post('/', users.create);

// // Retrieve a single user with id
// routes.get('/:user_id', users.findOne);

// // Update a user with id
// routes.put('/:id', users.update);

// // Delete a user with id
// routes.delete('/:id', users.delete);

routes.get('/', (req, res) => {
  res.send('you are loggedin, this is your profile - ' + req.user.username);
});

// module.exports = routes;
