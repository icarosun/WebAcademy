import { Router } from "express";

import produtoRouter from "../resources/produto/produto.router";
import linguagemRouter from "../resources/linguagem/linguagem.router";
import usuarioRouter from "../resources/usuario/usuario.router";
import authRouter from "../resources/auth/auth.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/usuario", usuarioRouter);
router.use("/produto", produtoRouter);
router.use("/linguagem", linguagemRouter);

export default router;
