const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT ?? 9999;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.listen(PORT, () => {
    console.log("Servidor rodando na ports", PORT);
});