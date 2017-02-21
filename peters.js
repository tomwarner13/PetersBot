var express = require('express');
var mongoose = require('mongoose');

//see for ref https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
var Schema = mongoose.Schema;
var app = express();



app.use(express.static('main'));

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Started server at port", port);
});

