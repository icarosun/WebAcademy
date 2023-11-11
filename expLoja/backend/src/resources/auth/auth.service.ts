import { Usuario, PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcryptjs";

import { LoginDto, SignUpDto } from "./auth.types";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";
import { buscaUsuarioPorEmail } from "../usuario/usuario.service";


const prisma = new PrismaClient();

export const createUsuario = async (usuario: SignUpDto): Promise<Usuario> => {
  const rounds = parseInt(process.env.SALT_ROUNDS!);
  const salt = await genSalt(rounds);
  const senha = await hash(usuario.senha, salt);
  
  return await prisma.usuario.create({ data: { 
    ...usuario, senha, tipoUsuarioId: TiposUsuarios.CLIENT} });
}

export const autenticate = async (usuario: LoginDto): Promise<Usuario | null> => {
  const foundUsuario = await buscaUsuarioPorEmail(usuario.email);

  if(!foundUsuario) return null;

  const ok = await compare(usuario.senha, foundUsuario.senha);

  if (!ok) return null;

  return foundUsuario;
  
}
