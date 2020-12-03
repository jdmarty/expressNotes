const path = require("path");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

//middle ware for body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//api router



//Listen on PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});