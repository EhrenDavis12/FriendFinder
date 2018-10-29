var express = require("express");
var path = require("path");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8080;