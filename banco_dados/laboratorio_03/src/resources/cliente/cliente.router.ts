import { Router } from "express";
import clienteController from "./cliente.controller";

const router = Router();

router.post("/", clienteController.create);

export default router;
