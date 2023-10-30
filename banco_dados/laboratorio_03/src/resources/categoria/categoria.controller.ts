import { Request, Response } from "express";
import {
  createCategoria,
  categoriaJaExiste,
  getCategoria,
} from "./categoria.service";

async function create(req: Request, res: Response) {
  try {
    const newCategoria = req.body;

    if (await categoriaJaExiste(newCategoria.nome)) {
      res.status(400).json({ msg: "Categoria já existe" });
    }

    const categoriaCreated = await createCategoria(newCategoria);
    res.status(201).json(categoriaCreated);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function read(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const categoria = await getCategoria(id);

    if (!categoria)
      return res.status(400).json({ msg: "Categoria não encontrado" });

    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { create, read };
