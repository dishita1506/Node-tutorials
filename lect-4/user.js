const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        res.write(`
      <form method="POST" action="/submit">
        <input type="text" name="username" placeholder="Enter name"/>
        <span>
          Male: <input type="radio" name="gender" value="male"/>
          Female: <input type="radio" name="gender" value="female"/>
        </span>
        <input type="submit" value="Submit"/>
      </form>
    `)
        return res.end();
    }
    else if (req.url === '/submit' && req.method === 'POST') {
        fs.writeFileSync("user.txt", "Dishita Kanav Bhardwaj!!")
        res.statusCode = 302;
        res.setHeader("Location", '/');
        return res.end();


    }
}).listen(3000, () => {
    console.log(`server listening at port http://localhost:3000`);
})