var mongoose = require("mongoose"),
	Schema = mongoose.Schema,

	Friend = new Schema ({
		name: {type: String, required: true},
		age: {type: Number, required: true},
		yearMet: {type: Date, required: true}
	})

	module.exports = mongoose.model("Friend", Friend)