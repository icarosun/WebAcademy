import { PrismaClient, Cliente } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCliente(cliente: Cliente): Promise<Cliente> {
  return await prisma.cliente.create({ data: cliente });
}
