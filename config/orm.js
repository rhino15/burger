var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}

function objToSql(obj) {
	var arr = [];

	for (var key in obj) {
		arr.push(key + '=' + obj[key]);
	}
	return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},

	insertOne: function(table, col, vals, cb) {
		var queryString = 'INSERT INTO ' + table;
		queryString += ' (';
		queryString += col.toString();
		queryString += ') ';
		queryString += 'VALUES (?) ';
		
		connection.query(queryString, [vals], function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},

	updateOne: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;
		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function(err, results) {
			if (err) throw err;
			cb(results);
		});
	},

	deleteOne: function(table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;
		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;