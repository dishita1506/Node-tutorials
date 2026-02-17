const http = require("http");
http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200;
        res.write("Welcome to home page");
        return res.end();

    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.write("welcome to about page")
        return res.end();
    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        res.write("welcome to contact page");
        return res.end();
    }
    else {
        res.statusCode = 400;
        res.write("invalid path")
        return res.end();
    }

    res.setHeaders('Content-Type', 'text/html');

}).listen(3000, () => {
    console.log(`server listening at port http://localhost:3000`);
})