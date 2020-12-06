# Express Note Taker
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

![Express Notes Home Page](https://github.com/jdmarty/expressNotes/blob/main/public/assets/images/home_page.PNG)
![Express Notes Notebook Page](https://github.com/jdmarty/expressNotes/blob/main/public/assets/images/notes_page.PNG)

## Links
Repository: [https://github.com/jdmarty/expressNotes](https://github.com/jdmarty/expressNotes)
Deployed: [https://rocky-springs-40120.herokuapp.com/](https://rocky-springs-40120.herokuapp.com/)

## Description

This note-taking application allows the user to create, view, update, and delete notes from a JSON file that acts as a simple database. It uses express to create a simple API that performs CRUD operations on the database.

## Usage

1. Click the "Get Started" button on the home page to begin viewing notes.
2. Enter text describing the note in the "Note Text" field. Note saving will only be enabled once there is text in both the Note Title and Note Text fields.
3. IF you are satisfied with your note, click the SAVE icon on the site header. If the note was saved successfully, it will be rendered as a selectable option in the side panel.
4. Click any of the notes displayed in the side panel to view that note. This note can be edited at any time, but it will not be saved unless you click the SAVE icon.
5. Click the EDIT icon on the site header or the PLUS button on the sidebar to begin creating a new note. Notes created in this way will not be added to the database until you click the SAVE icon.
6. Click the DELETE icon next to any note in the sidebar to remove it from the database.

## License

This application uses the ISC License

---------------------------------------------------------------------------------------------------------------------------

# Unit 11 Express Homework: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.
* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Important/HerokuGuide.md) for getting your app deployed on Heroku.

- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
