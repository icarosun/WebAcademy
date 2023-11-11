import { Request, Response } from "express";

import { SignUpDto } from "./auth.types";
import { buscaUsuarioPorEmail } from "../usuario/usuario.service";
import { autenticate, createUsuario } from "./auth.service";

async function signup(req: Request, res: Response) {
  const usuario = req.body as SignUpDto;
  try {
    if (await buscaUsuarioPorEmail(usuario.email)) return res.status(409).json({message: "Email informado já está sendo usado"});
    
    const newUsuario = await createUsuario(usuario);

    res.status(201).json(newUsuario);
  } catch(error) {
    res.status(500).json(error);
  }
} 

async function login(req: Request, res: Response) {
  try {
    const usuario = await autenticate(req.body);

    if (!usuario) return res.status(401).json({ message: "Email e/ou senha incorreots"});

    req.session.uid = usuario.id;
    req.session.tipoUsuario = usuario.tipoUsuarioId;

    res.status(200).json({message: "Usuário autenticado com sucesso"});
  } catch (error) {
    res.status(500).json(error);
  } 
}

async function logout(req: Request, res: Response) {
  req.session.destroy((error) => {
    if (error) return res.status(500).json({ message: "Error ao efetuar logout"});

    res.status(200).json({message: "Usuário deslogado com sucesso"});
  });
}

export default { signup, login, logout };
