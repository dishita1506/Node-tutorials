const http = require("http");

http.createServer((req, res) => {
    console.log("welcome to chapter 6 guys")
}).listen(3002, () => {
    console.log("server is running at port http://localhost:3002");
})