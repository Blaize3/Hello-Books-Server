const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (request, response) => response.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

// This app allows users to create account 1
app.post("/api/users/signup", function(request, response){
	response.send("i am the /api/users/signup route POST verb");
});



// This api allows users to login to the application2
app.post("/api/user/signin", function(request, response){
	response.send("i am the /api/users/signin route POST verb");
});



// This api allows users add new 3
app.post("/api/books", function(request, response){
	response.send("i am the /api/books route POST verb");
});


// Allow user to modify book 4
app.put("/api/books/:_id", function(request, response){
	response.send("i am the /api/books/id route PUT vert");
});


//allow user to get all the book in the library 5
app.get("/api/books", function(request, response){
	response.send("i am the /api/books route GET vert");
});

// user view books he has not return 6
app.get("/api/books/:_id/books", function(request, response){
	response.send("i am the /api/api/books/id route GET vert");
});


// This app allows users add new 7
app.post("/api/books", function(request, response){

});


// Allow user to modify book 8
app.put("/api/books/:_id", function(request, response){

});


module.exports = app;