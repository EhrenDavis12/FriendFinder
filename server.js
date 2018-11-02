var express = require("express");
var _apiRoutes = require("./app/routing/apiRoutes.js");
var _htmlRouts = require("./app/routing/htmlRouts.js");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8080;

var apiRoutes = new _apiRoutes(app);
var htmlRouts = new _htmlRouts(app);

app.listen(PORT, function () {
    console.log(`Friend Finder is active on PORT ${PORT}`);
});