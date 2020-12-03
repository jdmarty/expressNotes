//Modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const util = require('util');

//Create Router
const apiRouter = express.Router();
const dbPath = path.join(__dirname, "../db/db.json");

//Get All Notes
apiRouter.get('/notes', (req, res, next) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

//Create a new note
apiRouter.post('/notes', (req, res, next) => {
    //create a new note from the request body and give it an id
    const newNote = req.body;
    newNote.id = uuidv4();
    //read the current database
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) throw err;
        //parse data into JSON and push the new note
        const notesList = JSON.parse(data);
        notesList.push(newNote);
        //re-write the database with the new array
        fs.writeFile(dbPath, JSON.stringify(notesList), err => {
            if (err) throw err;
            console.log('Notes list updated!');
            res.json(newNote);
        });
    });
});

module.exports = apiRouter;
