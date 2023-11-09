import { Request, Response } from "express";

import { getAllUsuarios } from "./usuario.service";


async function index (req: Request, res: Response) {
  try {
    const usuarios = await getAllUsuarios();

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { index }
