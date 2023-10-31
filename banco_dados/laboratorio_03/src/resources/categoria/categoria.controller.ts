import { Request, Response } from "express";
import {
  createCategoria,
  categoriaJaExiste,
  getCategoria,
  updateCategoria,
  deleteCategoria,
  getAllCategoria,
} from "./categoria.service";

async function index(req: Request, res: Response) {
  try {
    const categorias = await getAllCategoria();

    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json(error);
  }
}

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

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const categoria = req.body;

  try {
    const categoriaAtual = await getCategoria(id);

    if (!categoriaAtual)
      return res.status(400).json({ msg: "Categoria não encontrado" });

    if (
      categoriaAtual?.nome !== categoria.nome &&
      (await categoriaJaExiste(categoria.nome))
    ) {
      return res
        .status(400)
        .json({ msg: "Já existe uma categoria com o nome informado" });
    }

    const categoriaAtualizada = await updateCategoria(id, categoria);

    res.status(204).json();
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const categoria = await getCategoria(id);

    if (!categoria)
      return res.status(400).json({ msg: "Categoria não encontrado" });

    await deleteCategoria(id);

    res.status(204).json();
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { create, read, update, remove, index };
