const express = require("express");
const path = require("path");

const htmlRouter = express.Router();

htmlRouter.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;