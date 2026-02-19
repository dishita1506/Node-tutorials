const express = require("express");
const app = express();


app.get('/', (req, res, next) => {
    console.log("This is first middleware");
    res.send("<h1>this is first middleware</h1>")
    next();
})
app.get('/home', (req, res) => {
    console.log("this is second middleware");
    res.send("<h1>This is the end of series!!!</h1>")
})

app.listen(3000);