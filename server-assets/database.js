var friends = [
	{
		name: "Lindsey",
		age: 28,
		yearMet: 2012
	},
	{
		name: "Kimberly",
		age: 26,
		yearMet: 1990
	},
	{
		name: "Sabrina",
		age: 25,
		yearMet: 2013
	}
];

var family = [
{
	name: "Josh",
	age: 28,
	relationship: "spouse"
},
{
	name: "Jyzelle",
	age: 2,
	relationship: "daughter"
}
]

module.exports.getFriends = function(){
	return friends;
}

module.exports.addFriend = function(friendObj){
	friends.push(friendObj);
}

module.exports.getFamily = function(){
	return family;
}

module.exports.addFamily = function(familyObj){
	family.push(familyObj)
}