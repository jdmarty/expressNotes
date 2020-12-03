//Modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

//Create Router
const apiRouter = express.Router();

//Get All Notes
apiRouter.get('/notes', (req, res, next) => {
    const filePath = path.join(__dirname, "../db/db.json");
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});




module.exports = apiRouter;
