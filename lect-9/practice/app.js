const bodyParser = require("body-parser");
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

app.get("/contact-us", (req, res) => {
    res.send(`
        <form action="/contact-us" method="post">
        <input type="text" name="name" placeholder="enter name"/>
        <input type="text" name="email"  placeholder="enter email"/>
        <input type="submit" value="submit"/>
        </form>
        `)
})
app.post("/contact-us", (req, res, next) => {
    console.log("first handling of post without parser", req.url, req.method, req.body);
    next();
})


app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log("second handling of post without parser", req.url, req.method, req.body);
    res.send("<h1>will contact you soon</h1>")

})

// app.use((req, res, next) => {
//     res.send("This is third middleware response right!!");
// })




app.listen(3000);