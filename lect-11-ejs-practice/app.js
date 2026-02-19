const express = require("express");
const app = express();
const { userRouter } = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const path = require("path");
const rootDir = require("./utils/pathUtil");
app.use(express.static(path.join(rootDir, 'public')));  //-->to excess static files like css on server

app.set('view engine', 'ejs');
app.set("views", "views");
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})
app.use(express.urlencoded());
app.use("/user", userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.render("404", { pageTitle: "404 not found" })
})

app.listen(3000);