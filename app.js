// Requirements
var http = require('http');
var os = require('os');
var ps = require('ps-node');

// Function to check if the wifi config tool is running
function checkProc(proc, callback) {
  ps.lookup({
    command: proc,
    psargs: 'ux'
    }, function(err, resultList) {
    if (err) {
        throw new Error( err );
    }

    // Return the number of processes
    return callback(resultList.length);
  });
}

// Create the HTTP server
http.createServer(function (req, res) {
  // Check if the wifi config tool is currently running
  checkProc('/usr/local/n/versions/node/6.10.2/bin/node server.js', function(response) {
    // Set the port based on the number or processes found
    if (response > 0) {
      var port = 80;
    } else {
      var port = 3000;
    }

    // Create a JSON string
    var outputObject = { 'name': os.hostname(), 'port': port };
    var jsonOutput = JSON.stringify(outputObject);
    res.write(jsonOutput); //write out the JSON string
    res.end(); //end the response
  });

}).listen(5001); //the server object
