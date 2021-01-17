const express = require("express");
const app = express();
const path = require("path");

const port = 3030;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(port, () => {
    console.log("Server listening on port: " + port);
})