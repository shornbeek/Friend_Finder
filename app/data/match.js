var newPerson = {
	friendName: "Sara",
	friendImg: "", 
	scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]};

// var friendArray = {
// 	"friendName": "Stephen",
// 	"friendImg": "2",
// 	"scores": [	1,	1,	1,	1,	1,	1,	1,	1,	1,	1	]};

var matchArr = [];

function newArray() {

	for (var i = 0; i < newPerson.scores.length; i++) {
		var friendCalc = Math.abs(newPerson.scores[i] - friend.scores[i]);
		console.log("friendCalc: " + friendCalc);
		matchArr.push(friendCalc);
	};
	console.log("matchArr: " + matchArr);
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	console.log(matchArr.reduce(reducer));
};

newArray();