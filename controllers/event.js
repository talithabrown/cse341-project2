const db = require('../models');
const Event = db.events;
//const ObjectId = require('mongodb').ObjectId;

exports.create = (req, res) => {
  // Validate request
  // if (!req.body) {
  //   res.status(400).send({ message: 'Content can not be empty!' });
  //   return;
  // }

  // Create an Event
  const event = new Event({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    city: req.body.city,
    zip_code: req.body.zip_code,
    address: req.body.address,
    description: req.body.description
  });
  //console.log(event);
  // Save Event in the database
  event
    .save(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Event.'
      });
    });
};

exports.findAll = (req, res) => {
  Event.find(
    {}
    // ,{
    //   title: 1,
    //   date: 1,
    //   time: 1,
    //   city: 1,
    //   zip_code: 1,
    //   address: 1,
    //   description: 1,
    //   _id: 0
    // }
  )
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving events.'
      });
    });
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  const event_id = req.params.event_id;
  Event.find({ event_id: event_id })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Not found Event with id ' + event_id });
      } else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Event with event_id=' + event_id
      });
      console.log(err);
    });
};

// // Update an Event by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: 'Data to update can not be empty!',
//     });
//   }

//   const id = req.params.id;

//   Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Event with id=${id}. Maybe Event was not found!`,
//         });
//       } else res.send({ message: 'Event was updated successfully.' });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Error updating Event with id=' + id,
//       });
//     });
// };

// // Delete an Event with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Event.findByIdAndRemove(id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Event with id=${id}. Maybe Event was not found!`,
//         });
//       } else {
//         res.send({
//           message: 'Event was deleted successfully!',
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Could not delete Event with id=' + id,
//       });
//     });
// };
