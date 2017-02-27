var exports = module.exports = {};

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.Schema({
	id: Number,
	name: String,
	orders: [Number]
});

var Order = mongoose.Schema({

})