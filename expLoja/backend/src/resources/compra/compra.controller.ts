import { Request, Response } from "express";
import { registrarCompra } from "./compra.service";

import { itemCarrinhoDto } from "./compra.types";

function addItemCarrinho(req: Request, res: Response) {
  const item = {} as itemCarrinhoDto;

  if (!req.session.carrinhoCompras) req.session.carrinhoCompras = [];
  
  item.produtoId = req.body.id;
  item.quantidade = parseInt(req.body.quantidade);

  req.session.carrinhoCompras.push(item); 

  console.log(req.session.carrinhoCompras);
  res.status(201).json({ message: "Item adicionado ao carrinho"})
}

async function finalizarCompra(req: Request, res: Response) {
  if (!req.session.uid) return res.status(400).json({message: "Usuário não logado"})
  if (!req.session.carrinhoCompras) return res.status(400).json({message: "Carrinho de compra vazio"})
 
  try {  
    await registrarCompra(req.session.carrinhoCompras, req.session.uid);

    res.status(201).json({ message: "Compra finalizada com sucesso"});
  } catch(error) {
    res.status(500).json(error);
  }
}

export default { addItemCarrinho, finalizarCompra} 
