// Requirements
var http = require('http');
var os = require('os');

// Create the HTTP server
http.createServer(function (req, res) {
  res.write(os.hostname()); //write out the hostname
  res.end(); //end the response
}).listen(5001); //the server object
