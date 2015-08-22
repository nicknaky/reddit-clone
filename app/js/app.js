var app = angular.module("app", []);
	
app.controller("MainCtrl", function($scope) {
		console.log("from the logs");
		$scope.test = "angularjs works!";
	});

