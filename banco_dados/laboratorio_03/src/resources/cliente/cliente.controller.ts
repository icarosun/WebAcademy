import { Request, Response } from "express";
import { createCliente } from "./cliente.service";

async function create(req: Request, res: Response) {
  const cliente = req.body;
  console.log("CHEGA AQUII");
  console.log(cliente);

  try {
    const clienteCreated = await createCliente(cliente);

    res.status(201).json(clienteCreated);
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { create };
