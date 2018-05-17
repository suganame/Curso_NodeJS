var mysql = require('mysql');

// Wrapper

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'Guilherme*123',
		database : 'portal_noticias',
		insecureAuth : true
	});
}

module.exports = function(){
	return connMySQL;
}