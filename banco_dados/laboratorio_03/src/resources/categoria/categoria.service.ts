import { PrismaClient, Categoria } from "@prisma/client";
import { CreateCategoriaDto } from "./categoria.types";

const prisma = new PrismaClient();

export async function createCategoria(
  categoria: CreateCategoriaDto
): Promise<Categoria> {
  return await prisma.categoria.create({ data: categoria });
}

export async function categoriaJaExiste(nome: string) {
  return !!(await prisma.categoria.findUnique({ where: { nome } }));
}
