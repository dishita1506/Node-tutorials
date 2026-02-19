const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./utils/rootDir");
const homeRouter = require("./routes/homeRoute");
const contactRouter = require("./routes/contactRoute");
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());
app.use("/home", homeRouter);
app.use("/contact", contactRouter);
app.use((req, res) => {
    res.sendFile(path.join(rootDir, "views", "404.html"));
})
app.listen("3000");
