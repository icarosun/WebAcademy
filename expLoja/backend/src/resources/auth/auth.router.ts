import { Router } from "express";

import authController from "./auth.contoller";
import isAuth from "../../middleware/isAuth";
import validate from "../../middleware/vaildate";
import { loginSchema, signSchema } from "./auth.schemas";

const router = Router();

router.post("/", validate(signSchema), authController.signup);
router.put("/", validate(loginSchema), authController.login);
router.delete("/", isAuth, authController.logout);

export default router;
