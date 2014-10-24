var Friend = require("./friendModel");

module.exports = {
	getFriends: function(req, res){
		Friend.find().exec(err, friends){}
			if(!err){
				res.send(friends);
			} else {
				res.send(err)
			}
		}
	},
	addFriend: function(req, res){
		var newFriend = new Friend(req.body);
		newFriend.save(function(err){
			if(err){
				res.send(err)
			} else {
				res.status(200).send(req.body.name + " added");
			}
		});
	}

}