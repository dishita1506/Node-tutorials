const express = require("express");
const app = express();
const { storeRouter } = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const path = require("path");
const rootDir = require("./utils/pathUtil");
app.use(express.static(path.join(rootDir, 'public')));
const { notFoundController } = require("./controller/storeController");

app.set('view engine', 'ejs');
app.set("views", "views");
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})
app.use(express.urlencoded());
app.use("/user", storeRouter);
app.use("/host", hostRouter);

app.use(notFoundController);

app.listen(3000);