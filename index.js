const express = require('express');
const path = require('path');
const { type } = require('os');

const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sql square root!',
  database: 'foragedb'
});

connection.connect(function(err) {
  if (err) throw err;
});


app.get('/leaderboard', (req, res) => {
  try {
    var responses = [];
    connection.query('SELECT * from users ORDER BY points DESC', (err, rows, fields) => {
      if (err) throw err;
      responses = rows;
      res.json(Array.from(responses));
    });
  }
  catch (error) {
    console.log("there is an error. error message is: " + error);
  }
});

// A handler for any request that doesn't match the above requests
app.get('*', (req, res) => {
   console.log(req.url);
   console.log("the request format doesn't match what we want");
});

const port = process.env.PORT || 5000;
app.listen(port);