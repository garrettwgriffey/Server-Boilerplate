# Server-Boilerplate


// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


------------------------------------------------------------------------------------------------------------

// ANOTHER EXAMPLE

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoute")(app);
require("./routes/apiRoute")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


HOT RESTAURANT ACTVITY 15 EXAMPLE

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

-----------------------------------------------------------------------------------------------------------------------------
  
  example 3 from Traversy "bare-bones server"
  
const express = require('express');

// init express
const app = express();

// create your endpoints/routes handlers
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// listen on a port
app.listen(5000);



