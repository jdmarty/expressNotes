const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");
const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

// A function for getting all notes from the db
const getNotes = () => {
  return $.ajax({
    url: "/api/notes",
    method: "GET",
  });
};

// A function for saving a note to the db
const saveNote = (note) => {
  return $.ajax({
    url: "/api/notes",
    data: note,
    method: "POST",
  });
};

// A function for deleting a note from the db
const deleteNote = (id) => {
  return $.ajax({
    url: "api/notes/" + id,
    method: "DELETE",
  });
};

// If there is an activeNote, display it, otherwise render empty inputs
const renderActiveNote = () => {
  $saveNoteBtn.hide();

  if (activeNote.id) {
    //makes notes title and text uneditable
    $noteTitle.attr("readonly", true);
    $noteText.attr("readonly", true);
    //sets values in note viewer to those of active note
    $noteTitle.val(activeNote.title);
    $noteText.val(activeNote.text);
  } else {
    $noteTitle.attr("readonly", false);
    $noteText.attr("readonly", false);
    $noteTitle.val("");
    $noteText.val("");
  }
};

// Get the note data from the inputs, save it to the db and update the view
const handleNoteSave = function () {
  const newNote = {
    //create an object from the inputs fields
    title: $noteTitle.val(),
    text: $noteText.val(),
  };

  //run a post request with that object then render notes
  saveNote(newNote).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Delete the clicked note
const handleNoteDelete = function (event) {
  // prevents the click listener for the list from being called when the button inside of it is clicked
  event.stopPropagation();
  //store the data from the clicked list item (this is the source object from when it was rendered)
  const note = $(this).parent(".list-group-item").data();

  //if this note was the active one, reset the active note to an empty object
  if (activeNote.id === note.id) {
    activeNote = {};
  }
  //run a delete request with the id of the target note attached
  deleteNote(note.id).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Sets the activeNote and displays it
const handleNoteView = function () {
  //set the active note to the data from the clicked list item (this is the source object from when it was rendered)
  activeNote = $(this).data();
  renderActiveNote();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = function () {
  activeNote = {};
  renderActiveNote();
};

// If a note's title or text are empty, hide the save button
// Or else show it
const handleRenderSaveBtn = function () {
  if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
    $saveNoteBtn.hide();
  } else {
    $saveNoteBtn.show();
  }
};

// Render's the list of note titles
const renderNoteList = (notes) => {
  $noteList.empty();
  //parse the response object into JSON
  notes = JSON.parse(notes);
  const noteListItems = [];

  // Returns jquery object for li with given text and delete button
  // unless withDeleteButton argument is provided as false
  const create$li = (text, withDeleteButton = true) => {
    const $li = $("<li class='list-group-item'>");
    const $span = $("<span>").text(text);
    $li.append($span);

    if (withDeleteButton) {
      const $delBtn = $(
        "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
      );
      $li.append($delBtn);
    }
    return $li;
  };

  //if there are notes to render, push a list item created without a delete button
  if (notes.length === 0) {
    noteListItems.push(create$li("No saved Notes", false));
  }

  //for every note in the array...
  notes.forEach((note) => {
    //create a list item and give it a data attribute that stores the source object
    const $li = create$li(note.title).data(note);
    //push this new list item to an array
    noteListItems.push($li);
  });
  //append all list items to the notes list
  $noteList.append(noteListItems);
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => {
  return getNotes().then(renderNoteList);
};

//Listener for save button (POST request and re-render)
$saveNoteBtn.on("click", handleNoteSave);
//Listener for list group items in notes list (make clicked note active)
$noteList.on("click", ".list-group-item", handleNoteView);
//Listener for new note button (makes empty note active)
$newNoteBtn.on("click", handleNewNoteView);
//Listener for delete buttons in notes list (DELETE request and re-render)
$noteList.on("click", ".delete-note", handleNoteDelete);
//When a key is released, check if both the title and text fields are populated
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();
