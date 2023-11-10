import { PrismaClient, Usuario } from "@prisma/client";


const prisma = new PrismaClient();

export const getAllUsuarios = async (): Promise<Usuario []> => {
  return await prisma.usuario.findMany();
}

export const getUsuario = async (id: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: {id}});
}
