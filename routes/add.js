var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	var nName = req.query.name;
	var nDesc = req.query.description;

	var newFriend = {
		"name": nName,
		"description": nDesc,
		"imageURL": "http://lorempixel.com/400/400/people"
	};
	data["friends"].push(newFriend);
 }