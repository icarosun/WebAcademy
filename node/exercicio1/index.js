/*
const http = require("node:http");
const fs = require("node:fs");
const str_helpers = require("./strings_helper.js");
const create_link = require("./createLink.js");
require("dotenv").config();

if (process.argv.length < 3) {
    throw new Error("Numero de parâmetros inválidos");
}

const PORT = process.env.PORT ?? 6767;

const dir = process.argv[2];

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type" : "text/html;charset = utf-8"});
    console.log(request.url);
    if (request.url === "/") {
        fs.readdir(dir, (err, files) => {
            if (err) throw new Error(err);
            files.forEach(file => response.write(create_link(dir, file)));
            response.end();
        });
    } else if (request.url.startsWith("/favicon")) {
        response.end("favicon");
    } 
    else {
        fs.readFile(`.${request.url}`, "utf-8", (erro, content) => {
            if (erro) throw new Error(erro);
            response.write(`<a href = "/">Voltar</a><br>`);
            response.end(content);
        });
    }

    
});

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
});*/

const fs = require("fs");

fs.readFile("./dir/arquivo1.txt", "utf-8", (err, content) => {
    console.log(content);
})

console.log("oiiiii");