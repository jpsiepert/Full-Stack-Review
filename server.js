var express = require("express"),
	bodyParser = require('body-parser'),
	//dataBase = require("./server-assets/database"), NOW USING MONGODB
	cors = require("cors"),
	//mongo set up
	mongoose = require("mongoose"),
	databaseReference = "mongodb://localhost/theFullestStack",
	connection = mongoose.connection,
	friendController = require("./server-assets/friendController")
	app = express(),
	port = 8888;



app.use(bodyParser.json());
app.use(cors());



// app.get("/friends", function(req, res){
// 	console.log("friends!")
// 	res.send(dataBase.getFriends())
// }) NOW USING MONGODB instead of database.js

app.get("/friends", friendController.getFriends)

app.post("/friends", function(req, res){
	
	res.send(dataBase.addFriend(req.body))
})


mongoose.connect(databaseReference);

connection.once("open", function(){
	console.log("mongoose is quacking")
})


app.listen(port, function(){
	console.log("listeting on port " + port)
})