import { Request, Response } from "express";

import { getAllUsuarios, getUsuario } from "./usuario.service";


async function index (req: Request, res: Response) {
  try {
    const usuarios = await getAllUsuarios();

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function read (req: Request, res: Response) {
  try {
    const { id } = req.params;

    const usuario = await getUsuario(id);

    if(!usuario) return res.status(400).json({msg: "Usuário inexistente"});

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
} 

export default { index, read }
