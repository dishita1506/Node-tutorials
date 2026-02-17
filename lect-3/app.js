const http = require("http");
http.createServer((req, res) => {
    res.statusCode = '400';
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>This is node series</title></head><body><h1>Welcome dishi!!</h1></body></html>');
    res.end();
}).listen(3000, () => {
    console.log(`server running at : http://localhost:3000`);
})