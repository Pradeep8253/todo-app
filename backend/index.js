const express = require("express");

const app = express();

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.post("/completed", function (req, res) {});

app.listen(3000, console.log("Connection started port 3000"));
