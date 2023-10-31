import { PrismaClient, Categoria } from "@prisma/client";
import { CreateCategoriaDto, UpdateCategoriaDto } from "./categoria.types";

const prisma = new PrismaClient();

export async function getAllCategoria(): Promise<Categoria[]> {
  return await prisma.categoria.findMany();
}

export async function createCategoria(
  categoria: CreateCategoriaDto
): Promise<Categoria> {
  return await prisma.categoria.create({ data: categoria });
}

export async function categoriaJaExiste(nome: string): Promise<boolean> {
  return !!(await prisma.categoria.findUnique({ where: { nome } }));
}

export async function getCategoria(id: string): Promise<Categoria | null> {
  return await prisma.categoria.findUnique({ where: { codCategoria: id } });
}

export async function updateCategoria(
  id: string,
  categoria: UpdateCategoriaDto
) {
  await prisma.categoria.update({
    where: {
      codCategoria: id,
    },
    data: categoria,
  });
}

export async function deleteCategoria(id: string) {
  await prisma.categoria.delete({ where: { codCategoria: id } });
}
