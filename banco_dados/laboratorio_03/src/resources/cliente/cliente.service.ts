import { PrismaClient, clienteEndereco } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCliente(
  value: clienteEndereco
): Promise<clienteEndereco> {
  return await prisma.clienteEndereco.create({ data: value });
}
