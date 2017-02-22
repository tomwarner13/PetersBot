var express = require('express');
var mongoose = require('mongoose');

//see for ref https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
var Schema = mongoose.Schema;
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

