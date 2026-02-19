const http = require("http");
const calculate = require("./calculatorHome")
http.createServer(calculate).listen(3001, () => {
    console.log("server is running at port http://localhost:3001");
})