const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('./config/passport-setup');
const passport = require('passport');
const session = require('express-session');

//require('./config/passport')(passport);

app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

const db = require('./models');
//const { session } = require('passport/lib');
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

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//cse341-backend2-event-manager.herokuapp.com
