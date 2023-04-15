const express = require('express');
const path = require('path');
const { type } = require('os');

const app = express();

app.get('/api/test/', async (req, res) => {
  try {
    console.log("the input text is " + req.query.input);
    const responses = ["test"];

    // Return response as json
    res.json(Array.from(responses));
  }
  catch (error) {
    console.log("there is an error. error message is: " + error);
  }
});

// A handler for any request that doesn't match the above requests
app.get('*', (req, res) => {
  console.log("the request format doesn't match what we want");
});

const port = process.env.PORT || 5000;
app.listen(port);