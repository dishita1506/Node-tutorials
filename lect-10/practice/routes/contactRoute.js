const express = require("express");
const contactRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/rootDir");
contactRouter.get("/contact-us", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "contact-us.html"))
})
contactRouter.post("/contact-us", (req, res) => {
    console.log("data ", req.body)
    res.sendFile(path.join(rootDir, "views", "contact-success.html"));
})
module.exports = contactRouter;