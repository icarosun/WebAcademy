import { PrismaClient, Usuario } from "@prisma/client";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";
import { genSalt, hash } from "bcryptjs";

const prisma = new PrismaClient();

export const getAllUsuarios = async (rotulo?: TiposUsuarios): Promise<Usuario []> => {
  if (!rotulo) return await prisma.usuario.findMany();
  return await prisma.usuario.findMany({ where: { tipoUsuarioId: rotulo}});
}

export const createUsuario = async (usuario: CreateUsuarioDto): Promise<Usuario> => {
  const rounds = parseInt(process.env.SALT_ROUNDS!);
  const salt = await genSalt(rounds);
  const senha = await hash(usuario.senha, salt);
  return await prisma.usuario.create({ data: { 
    ...usuario, senha} });
} 

export const buscaUsuarioPorId = async (id: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: {id}});
}

export const buscaUsuarioPorEmail = async (email: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: { email }});
}

export const updateUsuario = async (id: string, usuario: UpdateUsuarioDto) => {
  return await prisma.usuario.update({ where: {id}, data: usuario});
}

export const deleteUsuario = async (id: string) => {
  return await prisma.usuario.deleteMany({ where: {id}});
}
