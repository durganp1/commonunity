const sqlite3 = require('sqlite3').verbose();

//bring in express
const express = require('express');

//initiate server
const app = express();

//set environment variable for Heroku
const PORT = process.env.PORT || 3001;

// const apiRoutes = require('./controllers/api');

//express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware for front
// app.use(express.static('public'));

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the election database.');
  });

// // Use apiRoutes
// app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

//make server listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});