

angular.module('app')
.directive('menu', function(){
	
  return {
	  scope:false,
	  template:'<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">\
		  <b>Available</b> <span class="caret"></span>\
		  </button>\
		  <ul id="links" class="dropdown-menu">\
		  <li><a ng-click="hide(\'yes\');" href="#/tools">Yes</a></li>\
		  <li><a ng-click="hide(\'no\');" href="#/tools">No</a></li>\
		  <li><a ng-click="hide(\'all\');" href="#/tools">Show\
		  all</a></li>\
		  </ul>\
		  </div>'
		
	
	  
	 //  scope: {
	//	   linkHTML: "="
	//	},
	/* template:'<ul id="links" class="dropdown-menu">\
			  <li><a ng-click="hide(\'yes\');" href="#/tools">Yes</a></li>\
			  <li><a ng-click="hide(\'no\');" href="#/tools">No</a></li>\
			  <li><a ng-click="hide(\'all\');" href="#/tools">Show\
			  all</a></li>\
			  </ul>\
			  '
		*/	
	  /*

	 /*link: function (scope, element, attr) {
		
		 var template='<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">\
			  <b>Available</b> <span class="caret"></span>\
			  </button>\
			  <ul id="links" class="dropdown-menu">\
			  <li><a ng-click="hide(\'yes\');" href="#/tools">Yes</a></li>\
			  <li><a ng-click="hide(\'no\');" href="#/tools">No</a></li>\
			  <li><a ng-click="hide(\'all\');" href="#/tools">Show\
			  all</a></li>\
			  </ul>\
			  </div>';
		
		 	scope.$watch('showLinks', function (newVal, oldVal) {
             //alert(scope.car.name);
             if (newVal) {
                 $(element).html(template).show();
                 //$compile($('.car-edit'))(scope);
             }
             else
                 $(element).hide();
             if (oldVal)
                 $(element).hide();
         });
	}//link: function (scope, element, attr) {  */
  }
});

