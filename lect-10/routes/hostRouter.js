const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res) => {
    // res.sendFile(path.join(__dirname, "../", "views", "add-home.html"));
    res.sendFile(path.join(rootDir, "views", "add-home.html"))

})

hostRouter.post("/add-home", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "home-added.html"));
})

module.exports = hostRouter;