/* Controller: ToolsController
 */
angular.module('app')
  .controller('UsersController',
    function ($scope, $rootScope, $http, $location ,$window) {
      'use strict';
      

      $scope.showErrorAlert=false;
      
      	//populate all tools from the tools table here
		$http.get('/users')
			.success(function(data){
				//dumpObject(data);
			
				if(data.status==0){
				
				  	var value='';
				  	var data_array='';
		        	for (var j = 0; j < data.rows.length; j++){
		        		
		        		Object.keys(data.rows[j]).forEach(function (key) {
		        			
		        			//trim any whitespace from the string.
			        		//console.log('string '+"'"+data.rows[j][key]+"'");
			    	    	value = $.trim(String(data.rows[j][key]));
			    	    		
			    	    	//console.log('trimmed string '+"'"+value+"'");
			    	    	data.rows[j][key] = value;
			    	   
		    	    	});
		        		
		        	}//for (var j = 0; j < rows.length; j++){
		        	//dumpObject(data.rows);
		        	$scope.users = data
				}//if(data.status==0){
				
			})
			.error(function(){
				 //error
				$scope.showErrorAlert=true;
				 $scope.errormsg = 'Error occured.';
				 
			});
      
		//reference site
		//http://jsfiddle.net/TheSharpieOne/XNVj3/1/
		//download report button
		//here generates a spreadsheet from the html table.
		$scope.download = function(){
		
			 //get today's date for the file name
		     var d = new Date();
		     var curr_date = d.getDate();
		     var curr_month = d.getMonth() + 1; //Months are zero based
		     var curr_year = d.getFullYear();
		     var today = curr_month + "-" + curr_date + "-" + curr_year;
			
			 var blob = new Blob([document.getElementById('exportable').innerHTML], {
		          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
		     });
		     
			 saveAs(blob, "UserReport-"+today+".xls");
			
		}//	$scope.download = function(){
      
 });//function ($scope, $rootScope, $http, $location ,$window) {