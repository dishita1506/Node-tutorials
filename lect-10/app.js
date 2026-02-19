const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const path = require("path");
const rootDir = require("./utils/pathUtil");
app.use(express.static(path.join(rootDir, 'public')));  //-->to excess static files like css on server
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})
app.use(express.urlencoded());
app.use("/user", userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000);