const express = require("express");
const userRouter = express.Router();
const path = require("path");
const { houseRegistered } = require("./hostRouter");
userRouter.get("/", (req, res, next) => {
    res.render("home", { houseRegistered, pageTitle: "Welcome to home page" });
});

module.exports = { userRouter };
