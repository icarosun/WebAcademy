import { Request, Response } from 'express';
import { getAllProdutos } from './produto.service';

async function index(req: Request, res: Response) {
  try {
    const produtos = await getAllProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req: Request, res: Response) {}
async function read(req: Request, res: Response) {}
async function update(req: Request, res: Response) {}
async function remove(req: Request, res: Response) {}

export default { index, create, read, update, remove };
