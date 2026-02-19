const http = require("http");
const reqResHandler = require("./user");
let server = http.createServer(reqResHandler);
server.listen(3000, () => {
    console.log("server listening at  http://localhost:3000");
})