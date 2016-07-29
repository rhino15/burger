var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	console.log("I'm here");
	console.log(burger);
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/insertBurgers', function(req, res) {
	burger.insertOne('burger_name', req.body.burger_name, function(data) {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function(req, res) {
	var condition = 'id = ' + req.body.id;

	console.log(condition);

	burger.updateOne({'devoured': req.body.devoured}, condition, function(data) {
		res.redirect('/burgers');
	});
});

module.exports = router;