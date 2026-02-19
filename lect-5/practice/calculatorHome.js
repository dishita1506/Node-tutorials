const { URLSearchParams } = require("url");

const calculate = ((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {

        res.write("<h1>Welcome to home page click on the link to get started!!!</h1>")
        res.write(`<li><a href="/calculate">Click to redirect to calculate</a></li>`)
        return res.end();
    }
    else if (req.url === '/calculate') {
        res.write(`<html>
            <html lang="en">
            <head>
                <title>Calulate sum!!</title>
            </head>
            <body>
                <form action="/calculate-result" method="post">
                <input placeholder="enter first number" type="text" name="num1"/>
                <input placeholder="enter second number" type="text" name="num2"/>
                <input type="submit" value="Sum"/>
            </form>
            </body>
           </html>`)
        return res.end();
    }
    else if (req.url === '/calculate-result' && req.method === 'POST') {
        let body = [];

        req.on("data", chunk => {
            body.push(chunk);
        });

        req.on("end", () => {
            let data = Buffer.concat(body).toString();
            let params = new URLSearchParams(data);
            let dataObj = Object.fromEntries(params);

            // Convert to numbers before adding
            let sum = Number(dataObj.num1) + Number(dataObj.num2);

            console.log(sum);
            console.log(dataObj);

            res.write(`<h2>This is the sum ${sum}</h2>`);
            return res.end();
        });
    }

})
module.exports = calculate;