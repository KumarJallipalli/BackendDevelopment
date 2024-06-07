// importing the express module/library using require method
const express = require('express');

// Importing dotenv
require('dotenv').config()

// express() →  creates an Express Application & returns an Object
const app = express();

// ports are logical endpoints used to exchange information between a web server & a web client 
const port = 3000;

// It handles the GET request on the specified path by executing the callback fn
app.get('/', (req, res) => {
  // string data is sent as a response   
  res.send('Hello World!');
});

// app.listen() → listens to all the incoming connections/requests on specified port 
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});