const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
//const connect = require('./db/connect');

//connect.initDatabase();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//cse341-backend2-event-manager.herokuapp.com

// {
//   "event_id": 1,
//   "title": "Fireworks",
//   "date": "7/4/22",
//   "time": "9:00 PM",
//   "city": "Taylor",
//   "zip_code": "85939",
//   "address": "Freemon Park",
//   "description": "Everyone is welcome!"
// }
