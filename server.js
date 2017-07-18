'use strict';
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || process.env.port || 3000;

console.log(path.join(__dirname, '/app'));
app.use("/app", express.static(path.join(__dirname, "/app")));

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});
// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');