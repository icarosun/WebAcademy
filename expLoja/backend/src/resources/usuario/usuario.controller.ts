import { Request, Response } from "express";

import { getAllUsuarios, buscaUsuarioPorId, buscaUsuarioPorEmail, createUsuario, updateUsuario, deleteUsuario} from "./usuario.service";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

async function index (req: Request, res: Response) {
  try {
    const rotulo = req.query.rotulo as TiposUsuarios;
    const usuarios = await getAllUsuarios(rotulo);

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req: Request, res: Response) {
  try {
    const newUsuario = req.body as CreateUsuarioDto;

    if(await buscaUsuarioPorEmail(newUsuario.email)) return res.status(409).json({message: "Email cadastrado, use outro"})

    const usuarioCreated = await createUsuario(newUsuario);

    res.status(201).json(usuarioCreated);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function read (req: Request, res: Response) {
  try {
    const { id } = req.params;

    const usuario = await buscaUsuarioPorId(id);

    if(!usuario) return res.status(400).json({message: "Usuário inexistente"});

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
} 

async function update(req: Request, res: Response) {
  try {
    const idUsuario = req.params.id;
    const usuario = req.body as UpdateUsuarioDto;
    const actualUsuario = await buscaUsuarioPorId(idUsuario);

    if(!actualUsuario) return res.status(400).json({message: "Usuário inexistente"});
   
    if(!usuario.hasOwnProperty("email")) {
      await updateUsuario(idUsuario, usuario);

      res.status(200).json();
    }

    if (actualUsuario.email === usuario.email || !(await buscaUsuarioPorEmail(usuario.email))) {
      await updateUsuario(idUsuario, usuario);

      res.status(200).json();
    } else {
      res.status(400).json({message: "Email já foi cadastrado!"});
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const usuario = await buscaUsuarioPorId(id);

    if(!usuario) return res.status(400).json({message: "Usuário não existe"})

    await deleteUsuario(usuario.id);

    res.status(200).json();
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { index, create, read, update, remove}
