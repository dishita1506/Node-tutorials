let http = require("http");
http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader("Content-Type", 'text/html');
        res.write(`<!DOCTYPE html>
   <html lang="en">
<head>
    <title>Document</title>
</head>
<body>
  <a href="/home">Home</a>
  <a href="/men">Men</a>
   <a href="/home">Women</a>
  <a href="/men">Kids</a>
   <a href="/Cart">Cart</a>
</body>
</html>`)
        return res.end();
    }
    else if (req.url === '/home') {
        res.write("welcome to home")
        return res.end();
    }
    else if (req.url === '/men') {
        res.write("welcome to Men section")
        return res.end();
    }
    else if (req.url === '/women') {
        res.write("welcome to Women section")
        return res.end();
    }
    else if (req.url === '/kids') {
        res.write("welcome to Kids section")
        return res.end();
    }
    else if (req.url === '/cart') {
        res.write("welcome to cart")
        return res.end();
    }



}).listen(3000, () => {
    console.log("server running at port http://localhost:3000")
})