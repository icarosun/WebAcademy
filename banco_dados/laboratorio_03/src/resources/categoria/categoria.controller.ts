import { Request, Response } from "express";
import { createCategoria, categoriaJaExiste } from "./categoria.service";

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

export default { create };
