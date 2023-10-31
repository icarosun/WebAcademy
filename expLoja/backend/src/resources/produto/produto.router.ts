import { Router } from "express";
import validate from "../../middleware/vaildate";
import produtoController from "./produto.controller";
import { produtoSchema } from "./produto.schemas";

const router = Router();

router.get("/", produtoController.index);
router.post("/", validate(produtoSchema), produtoController.create);
router.get("/:id", produtoController.read);
router.put("/:id", validate(produtoSchema), produtoController.update);
router.delete("/:id", produtoController.remove);

export default router;
