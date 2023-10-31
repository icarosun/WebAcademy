import express from "express";
import router from "./router";

const api = express();

api.use(express.json());
api.use(router);

api.listen(4567, () => console.log("Servidor rodando na porta 4567"));
