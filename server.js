//modules
const path = require("path");
var express = require("express");

//express variables
var app = express();
var PORT = process.env.PORT || 3000;

//static server middleware
app.use(express.static('public'));

//middle ware for body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//html router
const htmlRouter = require('./routes/htmlRouter');
app.use('/', htmlRouter);

//api router
const apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

//Listen on PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});