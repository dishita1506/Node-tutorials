const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("this is path", req.path);
    next();
})
app.use((req, res, next) => {
    console.log("this is method", req.method);
    next();
})
app.get("/", (req, res) => {
    res.send(`<h1>this is req to contact page</h1><a href="/contact-us">click to navigate to contact</a>`);
})
// app.use((req, res, next) => {
//     res.send("This is third middleware response right!!");
// })




app.listen(3000);