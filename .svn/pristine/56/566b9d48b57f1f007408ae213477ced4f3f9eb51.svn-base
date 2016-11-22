// config/users.js

// load up the user model

var mysql = require('mysql');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);


function Users() {
	
 this.get = function(res) {
	  connection.query('SELECT * FROM users',function(err,rows){
		  if(err) res.send({status: 1, message: 'users populating failed '+err });
		  else
		   res.send({status: 0, rows:rows});
		  
		});
  };
 
}//function Users() {

module.exports = new Users();
