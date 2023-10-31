import { Router } from "express";
import categoriaRouter from "../resources/categoria/categoria.router";

const v1Router = Router();

v1Router.use("/categoria", categoriaRouter);

export default v1Router;
