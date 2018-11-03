var friends = require("../data/friends.js");

var matchFinder = function () {
    this.getMatch = function (score) {
        let highScore = 0;
        let bestMatch = {
            name: "No Match Found",
            photo: "",
            score: []
        };
        friends.forEach(friend => {
            let currentScore = 0;
            for (var i = 0; i < friend.scores.length; ++i) {
                if (friend.scores[i] === score[i]) {
                    currentScore += 5;
                } else if (friend.scores[i] === score[i] - 1 || friend.scores[i] === score[i] + 1) {
                    currentScore += 2;
                }
            }
            if (currentScore > highScore) {
                bestMatch = friend;
            }
        });
        return bestMatch;
    }
}

module.exports = matchFinder;