import { PrismaClient, Usuario } from "@prisma/client";


const prisma = new PrismaClient();

export const getAllUsuarios = async (): Promise<Usuario []> => {
  return await prisma.usuario.findMany();
}
