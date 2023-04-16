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

app.get('/user', (req, res) => {
  try {
    var responses = [];
    sql_query = 'SELECT * from users WHERE username = \'madelyn\'';
    console.log(sql_query);
    connection.query(sql_query, (err, rows, fields) => {
      if (err) throw err;
      responses = rows;
      console.log(responses[0]);
      res.json(Array.from(responses)[0]);
    });
  }
  catch (error) {
    console.log("there is an error. error message is: " + error);
  }
});

app.get('/achievements', (req, res) => {
  try {
    var responses = [];
    sql_query = 'SELECT * from relations JOIN achievements ON relations.achievement = achievements.achievement_name WHERE username = \'madelyn\'';
    connection.query(sql_query, (err, rows, fields) => {
      if (err) throw err;
      responses = rows;
      console.log(responses);
      res.json(Array.from(responses));
    });
  }
  catch (error) {
    console.log("there is an error. error message is: " + error);
  }
});

app.post('/update', function(req, res){
  var pointsToAdd=req.query.points;
  sql_query = 'SELECT points from users WHERE username = \'madelyn\'';
  const oldPoints = connection.query(sql_query, (err, rows, fields) => {
      if (err) throw err;
  });
  console.log(oldPoints);
  var newPoints=oldPoints+pointsToAdd;
  connection.query("UPDATE users SET points=(?) where username=\"madelyn\"", newPoints, function(err, result){
      if(err) throw err;
          console.log("1 record inserted");
      });
});

// A handler for any request that doesn't match the above requests
app.get('*', (req, res) => {
   console.log(req.url);
   console.log("the request format doesn't match what we want");
});

const port = process.env.PORT || 5000;
app.listen(port);