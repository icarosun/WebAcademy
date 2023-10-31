import { Router } from "express";
import categoriaRouter from "../resources/categoria/categoria.router";
import clienteRouter from "../resources/cliente/cliente.router";

const v1Router = Router();

v1Router.use("/categoria", categoriaRouter);
v1Router.use("/cliente", clienteRouter);

export default v1Router;
