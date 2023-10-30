import { Router } from "express";
import categoriaController from "./categoria.controller";

const router = Router();

router.get("/", categoriaController.index);
router.post("/", categoriaController.create);
router.get("/:id", categoriaController.read);
router.put("/:id", categoriaController.update);
router.delete("/:id", categoriaController.remove);

export default router;
