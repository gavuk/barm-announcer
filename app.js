// Requirements
var http = require('http');
var os = require('os');

// Create the HTTP server
http.createServer(function (req, res) {
  // Create a JSON string
  var outputArray = [os.hostname(), 0];
  var jsonOutput = JSON.stringify(outputArray);

  res.write(jsonOutput); //write out the JSON string
  res.end(); //end the response
}).listen(5001); //the server object
