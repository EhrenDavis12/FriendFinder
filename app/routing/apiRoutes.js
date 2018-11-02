var friends = require("../data/friends.js");
var path = require("path");
var _matchFinder = require("../js/matchFinder.js");

var apiRoutes = function (app) {

    app.get('/friends', (req, res) => {
        res.send(JSON.stringify(friends, null, 2));
    });

    app.post('/friends', (req, res) => {
        let body = req.body;
        let obj = {
            name: body.name,
            photo: body.photo,
            scores: body.scores
        };

        let matchFinder = new _matchFinder();
        let yourMatchName = matchFinder.getMatch(obj.scores);
        console.log("yourMatchName: " + yourMatchName);

        friends.push(obj);
        let appDir = path.dirname(__dirname);
        res.status(200).sendFile(path.join(appDir, "public", "home.html"));
        
    });
}

module.exports = apiRoutes;