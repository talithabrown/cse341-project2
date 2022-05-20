// //.env variables MONGODB_URI
// const dotenv = require('dotenv');
// dotenv.config();
// const uri = process.env.MONGODB_URI

// const db = require('../models');

// //This is our database code
// // const MongoClient = require('mongodb').MongoClient;

// // let _events_collection;
// // let _users_collection;

// const initDatabase = () => {
//   // MongoClient.connect(uri, (err, client) => {
//   //   if (err) throw err;
//   //   _events_collection = client.db('project2').collection('events');
//   //   _users_collection = client.db('project2').collection('users');
//   //   console.log('we are connected to our database!');
//   // });

//   db.mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to the database!');
//   })
//   .catch((err) => {
//     console.log('Cannot connect to the database!', err);
//     process.exit();
//   });

// };

// const getEventsCollection = () => {
//   return _events_collection;
// };

// const getUsersCollection = () => {
//     return _users_collection;
// };

// module.exports = { initDatabase, getEventsCollection, getUsersCollection, uri };
