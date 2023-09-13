const http = require("node:http");
const fs = require("node:fs");
require("dotenv").config();

if (process.argv.length < 3) {
    throw new Error("Numero de parâmetros inválidos");
}

const PORT = process.env.PORT ?? 6767;

const dir = process.argv[2];

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type" : "text/html;charset = utf-8"});
    fs.readdir(dir, (err, files) => {
        if (err) throw new Error(err);
        files.forEach(file => response.write(`${file}<br>`));
        response.end();
    });
});

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
});