// app/routes.js

var tools = require('../config/tools');
var customers = require('../config/customers');
var payments = require('../config/payments');
var users = require('../config/users');

module.exports = function(app) {

	// =====================================
	// HOME PAGE  ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('home.html',{ title: 'Home' }); // load the home.html file
	});

	
	// =====================================
	// TOOL REPORT PAGE  ========
	// =====================================
	app.get('/tools', function(req, res) {
		//populate tools from the tools table.
		tools.get(res);
		
	});
	

	// =====================================
	// CUSTOMER REPORT PAGE  ========
	// =====================================

	app.get('/customers', function(req, res) {
		//populate customers from the customers table.
		customers.get(res);
		
	});
	
	

	// =====================================
	// PAYMENTS REPORT PAGE  ========
	// =====================================

	app.get('/payments', function(req, res) {
		//populate payments from the payments table.
		payments.get(res);
		
	});
	

	// =====================================
	// USERS REPORT PAGE  ========
	// =====================================

	app.get('/users', function(req, res) {
		//populate users from the users table.
		users.get(res);
		
	});
	
	
//not used but this is how to generate a spread sheet in node.js
/*	app.post('/tools/download',function(req,res){
	    var nodeExcel=require('excel-export');
	    //var dateFormat = require('dateformat');
	    var conf={}
	    conf.cols=[{
	            caption:'Sl.',
	            type:'number',
	            width:3
	        },
	        {
	            caption:'Job',
	            type:'string',
	            width:50
	        },
	        {
	            caption:'Date',
	            type:'string',
	            width:15
	        }
	        ];
	   
	    var fileContents = req.body.fileData; // The data to be written to our file     
	           console.log(' fileContents '+fileContents);
	
	    var array = Object.keys(data_array).map(function (key) { return data_array[key]; });
	    
	    console.log('array '+array);
	     conf.rows=array;
	     
	     //get today's date for the file name
	     var d = new Date();
	     var curr_date = d.getDate();
	     var curr_month = d.getMonth() + 1; //Months are zero based
	     var curr_year = d.getFullYear();
	     var today = curr_month + "-" + curr_date + "-" + curr_year;
	    var result=nodeExcel.execute(conf);

	    res.setHeader('Content-Type','application/vnd.openxmlformates');
	    res.setHeader("Content-Disposition","attachment;filename="+"toolReport_"+today+".xlsx");
	    res.end(result,'binary');
	          
	});
	*/
}//module.exports = function(app) {