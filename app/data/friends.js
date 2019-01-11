var friendsArr = [
    {
      friendName: "Rick",
      friendImg: "https://assets.vg247.com/current//2017/04/rick_and_morty_3.jpg",
      scores: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
      ]
    },
    {
      friendName: "Pat",
      friendImg: "https://lastditchcritic.files.wordpress.com/2015/09/its-pat.jpg",
      scores: [
          3,
          1,
          1,
          1,
          2,
          1,
          4,
          1,
          3,
          5
      ]
    },
    {
        friendName: "Teddy",
        friendImg: "https://vignette.wikia.nocookie.net/club-penguin-robber/images/3/33/659585-ted-in-the-suit.jpg/revision/latest?cb=20160713184705",
        scores: [
            3,
            1,
            5,
            1,
            2,
            3,
            3,
            3,
            3,
            1
        ]
      },

      {
        friendName: "Darcy",
        friendImg: "",
        scores: [
            3,
            1,
            1,
            1,
            2,
            5,
            4,
            5,
            3,
            3
        ]
      },

      {
        friendName: "Chuck Norris",
        friendImg: "https://media.nbc4i.com/nxs-wcmhtv-media-us-east-1/photo/2017/03/10/chuck-norris_37796664_ver1.0_1280_720.jpg",
        scores: [
            1,
            4,
            5,
            3,
            3,
            3,
            4,
            2,
            1,
            1
        ]
      },

    {
        friendName: "Phillip",
      friendImg: "https://usatbroncoswire.files.wordpress.com/2018/11/lindsay-hair1.jpg?w=1000&h=600&crop=1",
      scores: [
          5,
          5,
          5,
          5,
          4,
          4,
          4,
          4,
          1,
          1
      ]
    }
  ];
  
//saved friends in friends array:) Now we have some friends 
  module.exports = friendsArr;

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