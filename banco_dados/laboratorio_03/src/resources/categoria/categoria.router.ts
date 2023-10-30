import { Router } from "express";
import categoriaController from "./categoria.controller";

const router = Router();

router.get("/");
router.post("/", categoriaController.create);
router.get("/:id");
router.put("/:id");
router.delete("/:id");

export default router;
