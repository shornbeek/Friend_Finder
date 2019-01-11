var newPerson = {
	friendName: "Darcy",
	friendImg: "", 
	scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]};

var friendArray = {
	"friendName": "Stephen",
	"friendImg": "2",
	"scores": [	1,	1,	1,	1,	1,	1,	1,	1,	1,	1	]};

var friendMatch = [];

function newArray() {

	for (var i = 0; i < newPerson.scores.length; i++) {
		var friendCalc = Math.abs(newPerson.scores[i] - friend.scores[i]);
		console.log("friendCalc: " + friendCalc);
		friendMatch.push(friendCalc);
	};
	console.log("friendMatch: " + friendMatch);
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	console.log(friendMatch.reduce(reducer));
};

newArray();