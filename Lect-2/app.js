const http = require("http");
http.createServer((req, res) => {
    console.log("url ", req.url);
    console.log("method", req.method);
    console.log("header", req.headers);
}).listen(3000, () => {
    console.log(`server running at : http://localhost:3000`);
})