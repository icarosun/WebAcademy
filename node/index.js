const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html;chareset=utf-8"})
    response.write("oi");
    response.end();
});

server.listen(5678, () => {
    console.log("servidor iniciado na porta 5678");
});