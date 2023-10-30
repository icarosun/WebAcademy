import { Categoria } from "@prisma/client";

export type CreateCategoriaDto = Pick<Categoria, "nome">;
