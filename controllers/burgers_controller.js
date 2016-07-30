var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		res.render('index', hbsObject);
	});
});

router.post('/burgers/insertBurgers', function(req, res) {
	burger.insertOne('burger_name', req.body.burger_name, function(data) {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;

	burger.updateOne({'devoured' : 1}, condition, function(data) {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	
	burger.deleteOne(condition, function(data) {
		res.redirect('/burgers');
	});
});

module.exports = router;