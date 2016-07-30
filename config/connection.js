var mysql = require('mysql');

var source = {

	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Bacca15',
		database: 'burgers_db'
	}, 
	jawsDB: {
		port: 3306,
		host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'i74o3cplnijoxexu',
		password: 'mxz850p1ucafdvqw',
		database: 't7zrc5n6tadyhop5'
	}
};

var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);

});

module.exports = connection;
