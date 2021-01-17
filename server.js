const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3030;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
})