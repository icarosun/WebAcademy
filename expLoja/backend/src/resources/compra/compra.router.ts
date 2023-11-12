import { Router } from "express";

import compraController from "./compra.controller";

const router = Router();

router.post("/:id", compraController.addItemCarrinho);
router.post("/", compraController.finalizarCompra);

export default router;
