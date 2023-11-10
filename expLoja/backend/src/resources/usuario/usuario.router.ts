import { Router } from "express";

import usuarioController from "./usuario.controller"
import { usuarioSchema } from "./usuario.schemas";
import validate from "../../middleware/vaildate";

const router = Router();

router.get("/", usuarioController.index);
router.post("/", validate(usuarioSchema), usuarioController.create);
router.get("/:id", usuarioController.read);
router.put("/:id", usuarioController.update);
router.delete("/:id", usuarioController.remove);

export default router;

