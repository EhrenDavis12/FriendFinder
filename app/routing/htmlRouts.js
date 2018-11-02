var path = require("path");

var htmlRouts = function (app) {
    
    app.get("/", function (req, res) {
        let appDir = path.dirname(__dirname);
        res.sendFile(path.join(appDir, "public", "home.html"));
    });

    app.get("/survey", function (req, res) {
        let appDir = path.dirname(__dirname);
        res.sendFile(path.join(appDir, "public", "survey.html"));
    });
}
module.exports = htmlRouts;