import { Router } from "express";

import produtoRouter from "../resources/produto/produto.router";
import linguagemRouter from "../resources/linguagem/linguagem.router";
import usuarioRouter from "../resources/usuario/usuario.router";

const router = Router();

router.use("/usuario", usuarioRouter);
router.use("/produto", produtoRouter);
router.use("/linguagem", linguagemRouter);

export default router;
