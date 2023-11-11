import { Router } from "express";

import authController from "./auth.contoller";
import isAuth from "../../middleware/isAuth";

const router = Router();

router.post("/", authController.signup);
router.put("/", authController.login);
router.delete("/", isAuth, authController.logout);

export default router;
