// Include required dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Declare instance of Express
const app = express();

// Declare port
const PORT = process.env.PORT || 8080;

// Create middleware to parse the request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the web root to the public folder
app.use(express.static(__dirname + "/public"));

// API Routes

// Get Route to read and display from JSON db
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// Post Route to save new note to JSON db
app.post("/api/notes", function (req, res) {
    // Declare empty array for current and new notes
    let savedNotes = [];

    // Read currently stored notes list
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        // Parse currently stored notes
        const currentNoteData = JSON.parse(data);

        for (let i = 0; i < currentNoteData.length; i++) {
            // Create new note object for each current note
            const note = {
                title: currentNoteData[i].title,
                text: currentNoteData[i].text,
                id: i,
            };

            // Add note object to array
            savedNotes.push(note);
        }

        // Create new note object for new note
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: savedNotes.length,
        };

        // Push new note into array
        savedNotes.push(newNote);

        // Stringify savedNotes array
        savedNotes = JSON.stringify(savedNotes);

        fs.writeFile("./db/db.json", savedNotes, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });

        // Send a response to resolve the post request
        res.send("your note has been saved");
    });
});

// Delete Route to delete store notes
app.delete("/api/notes/:id", function (req, res) {
    const noteID = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        // Parse currently stored notes
        const currentNoteData = JSON.parse(data);

        const updatedData = currentNoteData.filter((noteID) => note.id !== parseInt(noteID));


    })
});
// API Routes

// HTML Routes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
// HTML Routes

// Enable Express instance to listen on defined port(s)
app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});