import { Compra, CompraProduto, PrismaClient } from "@prisma/client";
import { itemCarrinhoDto } from "./compra.types";

const prisma = new PrismaClient();

export const registrarCompra = async (carrinho: itemCarrinhoDto[], usuarioId: string): Promise<Compra> => {  
  return await prisma.compra.create({
    data: {
      usuarioId,
      CompraProduto: {
        createMany: {
          data: carrinho,
        },
      },
    },
  })
}

