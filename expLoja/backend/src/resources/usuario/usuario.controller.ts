import { Request, Response } from "express";

import { getAllUsuarios, buscaUsuarioPorId, buscaUsuarioPorEmail, createUsuario, updateUsuario, deleteUsuario} from "./usuario.service";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

async function index (req: Request, res: Response) {
/*
    #swagger.summary = "Recupera os usuários cadastrados por rotulo ou todos usuários"
    #swagger.query['rotulo'] = {
      example: "2272583b-f5a5-4238-b68f-44061fe0016b ou 380c7fd1-f5f8-490a-8fc4-d4e415c78d96", 
      description: "O rotulo pode ser o Id do admin ou cliente",
     in: 'body',
    }
      */

  try {
    const rotulo = req.query.rotulo as TiposUsuarios;
    const usuarios = await getAllUsuarios(rotulo);

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req: Request, res: Response) {
/*
    #swagger.summary = "Cadastra um novo usuário"
    #swagger.parameters['body'] = {
     in: 'body',
     schema: { $ref: '#/definitions/CreateUsuarioDto'}
    }
    #swagger.response[201] = {
      schema: { $ref: '#/definitions/Usuario'}
    }
  */

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
 /*
    #swagger.summary = "Retorna um usuário específico "
    #swagger.parameters['id'] = { description: "Id do usuário específico" }
    #swagger.response[200] = {
      schema: { $ref: '#/definitions/Usuario'}
    }
  */

 
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
/*
    #swagger.summary = "Atualiza um usuário específico "
    #swagger.parameters['id'] = { description: "Id do usuário específico" }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: { $ref: '#definitions/UpdateUsuarioDto'} 
    }
    */

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
  /*
    #swagger.summary = "Deleta um usuário específico "
    #swagger.parameters['id'] = { description: "Id do usuário específico" }
     */

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
