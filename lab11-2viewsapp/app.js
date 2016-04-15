// var app = angular.module('addToDoList', [ngRoute]);
// // This is declaring a module. More on this in a moment
//   app.controller('ToDoListCtrl', function($scope){ $scope.list = ['eg. Pay DTE Bill'];
//   $scope.add=  function(){
//   $scope.list.push($scope.newitem);
//   };
// });
var app = angular.module('dogorcat', ['ngRoute']);
app.config(function($routeProvider) { $routeProvider

  .when('/view1',{controller: 'SimpleController', templateUrl: 'view1.html'})

  .when('/view2',{controller: 'SimpleController', templateUrl: 'view2.html'})

  .otherwise({ redirectTo: '/' });

});
