var app = angular.module('app', ['ngRoute'])
.config(function ( $routeProvider,$compileProvider ) {
    
    'use strict';
    
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
     
       .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsController',
        controllerAs: 'tools'
      })
      
       .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersController',
        controllerAs: 'customers'
      })
      
       .when('/payments', {
        templateUrl: 'views/payments.html',
        controller: 'PaymentsController',
        controllerAs: 'payments'
      })
      
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      /*
       .when('/tools/download', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsController',
        controllerAs: 'tools'
      })
      */
      .otherwise({
        redirectTo: '/'
      });
    
  }).run(function($rootScope){
   $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
      console.log(event, current, previous, rejection)
    })
  });

