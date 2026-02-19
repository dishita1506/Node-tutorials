const http = require("http");
const fs = require("fs");
const reqResHandler = ((req, res) => {
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
        const body = [];

        req.on('data', (chunk) => {
            console.log("chunk:", chunk);
            body.push(chunk);
        });

        req.on("end", () => {
            const data = Buffer.concat(body).toString();
            console.log("final data:", data);
            const params = new URLSearchParams(data);
            const dataObject = Object.fromEntries(params);
            console.log("data object : ", dataObject);
            fs.writeFileSync("userDetails.txt", JSON.stringify(dataObject));

            res.statusCode = 302;
            res.setHeader("Location", '/');
            res.end();
        });
    }

})
module.exports = reqResHandler;