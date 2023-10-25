import { Request, Response } from 'express';

//const index = (Request, Response) => {
//conectar com o banco dedados
//gerar a lista
//passar para json
//response com json e cod
//};

async function index(req: Request, res: Response) {
  res.send('oiii');
}
async function create(req: Request, res: Response) {}
async function read(req: Request, res: Response) {}
async function update(req: Request, res: Response) {}
async function remove(req: Request, res: Response) {}

export default { index, create, read, update, remove };
