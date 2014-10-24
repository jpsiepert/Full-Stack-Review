var app = angular.module("friends");
app.service("myService", function($http, $q){
	
	this.getFriends = function(){
		return $http({
			method: "GET",
			url: "http://localhost:8888/friends"
		})
	}

	this.addFriend = function(friendObj){
		return $http({
			method: "POST",
			url: "http://localhost:8888/friends",
			data: {name: friendObj.name, age: friendObj.age, yearMet: friendObj.yearMet}
		})
	}
})