// Include required dependencies
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");

// Declare port
const PORT = process.env.PORT || 8080;

// API Routes
app.get("/api/notes", function (req, res) {
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
})