/*** BUILD SERVER ***/

//Require express
const express = require("express");

//Function that represents the express module
const app = express();

//Method listen to listen to a specific port for a HTTP request that gets sent to the server
//Call back function to the listen method to see when the port is setup and the server is running
app.listen(3000, function() {
  console.log("Server started on port 3000");
});