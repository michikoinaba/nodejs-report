/* Controller: ToolsController
 */
angular.module('app')
  .controller('ToolsController',
    function ($scope, $rootScope, $http, $location ,$window) {
      'use strict';
      
      $scope.showErrorAlert=false;
      $scope.AvailableItem = true;
	  $scope.nonAvailableItem = true;
	  $scope.showMenu=true;
      	//populate all tools from the tools table here
		$http.get('/tools')
			.success(function(data){
				//dumpObject(data);
				//$scope.tools = data;
				if(data.status==0){
				
				  	var value='';
				  	var data_array='';
		        	for (var j = 0; j < data.rows.length; j++){
		        		
		        		Object.keys(data.rows[j]).forEach(function (key) {
		        			//dumpObject(data.rows[j]);
		        			//trim any whitespace from the string.
		        			//console.log('string '+"'"+data.rows[j][key]+"'");
		    	    		value = $.trim(String(data.rows[j][key]));
		    	    		
		    	    		//console.log('trimmed string '+"'"+value+"'");
		    	    		data.rows[j][key] = value;
		    	    		
		    	    	});
		        		
		        	}//for (var j = 0; j < rows.length; j++){
		        	//dumpObject(data.rows);
		        	$scope.tools = data
		        	
		        
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
		     
		   
		   //  console.log('showMenu1 '+$scope.showMenu);
		     //we don't want to write the Available menu links values (yes, no, show all) into the spread sheet.
			 //so remove the links
		     removeItem('links');
		 
		     //generate the spread sheet with the html table data value
			var blob = new Blob([document.getElementById('exportable').innerHTML], {
		          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
		     });
		     
			 saveAs(blob, "ToolReport-"+today+".xls");
			
		
			
			//get the exportable id from div
			 var html = document.getElementById('exportable');
			 //get the <li> tag from the exportable innerHTML.
			 var li = html.getElementsByTagName("li");
			 console.log('li.length '+li.length);
			 
			 //check if there is the menu link in the innerHTML,
			 //if the length is 0, that means the link is removed.
			 //so reset the showMenu flag and show add the link from the toolDirective
			 if(li.length==0){
				 
					$scope.showMenu = !$scope.showMenu
			 }// if(li.length==undefined){
				//console.log('showMenu2 '+$scope.showMenu);
			
			
		}//	$scope.download = function(){
		
	
		//available column yes/no dropdown to show the selected value and hide the unselected value rows.
		   $scope.hide = function (value) { 
			   
			   if(value =='yes'){
				   $scope.AvailableItem = true;
				   $scope.nonAvailableItem = false;
				   //console.log('value '+value) ;
			   }
			   else if(value =='no'){
				   
				   $scope.AvailableItem = false;
				   $scope.nonAvailableItem = true;
				   //console.log('value '+value) ;
			   
			   }//else
			   else if(value =='all'){
				   
				   $scope.AvailableItem = true;
				   $scope.nonAvailableItem = true;
				   //console.log('value '+value) ;
			   
			   }//else	
		       
		    };
		    
	
    });// function ($scope, $rootScope, $http, $location ) {


	/**
	 * 
	 * this function remove a selected div element from the DOM
	
	 * @param itemid
	
	 */
	function removeItem( itemid ) {
	  var element = document.getElementById(itemid ); // will return element
	  element.parentNode.removeChild(element); // will remove the element from DOM
	}//function

	

/**
 * chome way to output an object
 * 
 * @param obj
 */
function dumpObject (obj) {
    var output, property;
    for (property in obj) {
    	
        output += property + ': ' + obj[property] + '; ';
    }
    console.log(' dumpObject '+output);
}