import { Router } from "express";

import produtoRouter from "../resources/produto/produto.router";
import linguagemRouter from "../resources/linguagem/linguagem.router";
import usuarioRouter from "../resources/usuario/usuario.router";
import authRouter from "../resources/auth/auth.router";
import compraRouter from "../resources/compra/compra.router";

const router = Router();

router.use(
  "/auth", 
  // #swagger.tags = ["Auth"]
  authRouter);
router.use(
  "/usuario", 
  // #swagger.tags = ["Usuario"]
  usuarioRouter);
router.use(
  "/produto", 
  // #swagger.tags = ["Produto"]
  produtoRouter);
router.use(
  "/linguagem", 
  // #swagger.tags = ["Linguagem"]
  linguagemRouter);
router.use(
  "/compra", 
  // #swagger.tags = ["Compra"]
  compraRouter);

export default router;
