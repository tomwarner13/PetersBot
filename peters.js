var express = require('express');
var mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:12345/test';
mongoose.connect(dbUrl);

//see for ref https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Successfully connected to MongoDb on ${dbUrl}`);
});

var app = express();

//user management
//TODO: figure out if we can integrate w/ hipchat API for user mgmt

app.get('/users', (req, res) => {
	//return user list
})

app.get('/users/{id}', (req, res) => {
	//return user with specific ID
})

//order management

app.post('/orders', (req, res) => {
	//create new order, return order ID
})

app.patch('/orders/{orderId}', (req, res) => {
	//edit order with specific ID
})

app.get('/orders', (req, res) => {
	//return all orders
})

app.get('/orders/{id}', (req, res) => {
	//return order with specific ID
})

app.use(express.static('main'));

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Started server at port", port);
});

