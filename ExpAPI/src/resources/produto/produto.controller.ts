import { Request, Response } from 'express';
import {
  createProduto,
  getAllProdutos,
  produtoJaExiste
} from './produto.service';
import { CreateProdutoDto } from './produto.types';

async function index(req: Request, res: Response) {
  try {
    const produtos = await getAllProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req: Request, res: Response) {
  const produto = req.body as CreateProdutoDto;
  try {
    if (await produtoJaExiste(produto.nome)) {
      return res.status(400).json({ msg: 'Produto já existe' });
    }

    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function read(req: Request, res: Response) {}
async function update(req: Request, res: Response) {}
async function remove(req: Request, res: Response) {}

export default { index, create, read, update, remove };
