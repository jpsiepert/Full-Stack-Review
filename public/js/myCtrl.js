var app = angular.module("friends");
app.controller("mainCtrl",  function($scope, myService){
	$scope.test = "Hello Zombies";

	$scope.getFriends = function(){
		myService.getFriends()
		.then(function(data){
		$scope.friends =  data.data
		console.log($scope.friends)
		})
	}

	$scope.getFriends();

	$scope.addFriend = function(){
		console.log("adding friend)")
		myService.addFriend($scope.friend)
		.then(function(data){
			$scope.getFriends();
		})
	}
})