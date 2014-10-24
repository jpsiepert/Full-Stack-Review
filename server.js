var express = require("express"),
	bodyParser = require('body-parser'),
	dataBase = require("./server-assets/database"),
	cors = require("cors"),
	app = express(),
	port = 8888;

app.use(bodyParser.json());//not sure why use .json
app.use(cors());



app.get("/friends", function(req, res){
	console.log("friends!")
	res.send(dataBase.getFriends())
})

app.post("/friends", function(req, res){
	
	res.send(dataBase.addFriend(req.body))
})

app.listen(port, function(){
	console.log("listeting on port " + port)
})