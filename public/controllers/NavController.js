
//this controller hightlight the selected tab in the index.html
app.controller('NavController', 
['$scope', '$location', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    
    //console.log('currentRout '+currentRoute);
    return page === currentRoute ? 'menu-top-active' : '';
  };
  
}]);

