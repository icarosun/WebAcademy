import { PrismaClient, Usuario } from "@prisma/client";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";

const prisma = new PrismaClient();

export const getAllUsuarios = async (): Promise<Usuario []> => {
  return await prisma.usuario.findMany();
}

export const createUsuario = async (usuario: CreateUsuarioDto): Promise<Usuario> => {
  return await prisma.usuario.create({ data: usuario });
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
