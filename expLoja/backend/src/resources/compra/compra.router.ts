import { Router } from "express";

import compraController from "./compra.controller";

const router = Router();

router.post("/", compraController.addItemCarrinho);
router.post("/carrinho", compraController.finalizarCompra);

export default router;
