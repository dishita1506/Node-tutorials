const http = require("http");
const port = 3000;
http.createServer((req, res) => {
    console.log("req is executed succesfully !!");
    process.exit()
}).listen(port, () => {
    console.log(`server is running at address http://localhost:${port}`)
});
