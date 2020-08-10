/*** BUILD SERVER ***/

//Require express
const express = require("express");

//Function that represents the express module
const app = express();

//Method provided by express that allows to specify what should happen when the browser gets in touch with our server and makes a get request
//Call back function that tells the server what to do when it receives the request
app.get("/", function(request, response) {
  //console.log(request);

  //response object and send method to send a response
  response.send("<h1>Hello there panda safadao</h1>");
});

app.get("/contact", function(request, response) {
  response.send("Contact me at: richard@fuinha.com");
});

app.get("/about", function(request, response) {
  response.send("I am Fuinha");
});

app.get("/hobbies", function(request, response) {
  response.send("<ul><li>skating</li><li>programming</li><li>cooking</li></ul>")
});

//Method listen to listen to a specific port for a HTTP request that gets sent to the server
//Call back function to the listen method to see when the port is setup and the server is running
app.listen(3000, function() {
  console.log("Server started on port 3000");
});