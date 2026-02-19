const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");

const houseRegistered = [];
hostRouter.get("/add-home", (req, res) => {
    // res.sendFile(path.join(__dirname, "../", "views", "add-home.html"));
    res.render("add-home", { pageTitle: "Page to add home!" })

})

hostRouter.post("/add-home", (req, res) => {
    houseRegistered.push({ houseName: req.body.housename });
    console.log("registerd house : ", houseRegistered);
    res.render("home", { houseRegistered, pageTitle: "Home added successfully!" });
})

module.exports = { hostRouter, houseRegistered };