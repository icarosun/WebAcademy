import { Router } from "express";
import categoriaRouter from "../resources/categoria/categoria.router";
import clienteRouter from "../resources/cliente/cliente.router";
import produtoRouter from "../resources/produto/produto.router";

const v1Router = Router();

v1Router.use("/categoria", categoriaRouter);
v1Router.use("/cliente", clienteRouter);
v1Router.use("/produto", produtoRouter);

export default v1Router;
