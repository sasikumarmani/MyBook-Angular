"use strict";
myBookApp.controller('loginController', ['$scope','$location', function($scope,$location) {
 
   $scope.login = function() {       
	   if($scope.userName  === "Developer" && $scope.password ==="PasDev"){
			$location.path("home");
	   }else{
	    console.log("Login Failed");
		alert("Login Failed");
	   }
    };
  
}]);