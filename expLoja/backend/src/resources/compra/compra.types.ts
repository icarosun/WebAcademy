import { CompraProduto } from "@prisma/client";

export type itemCarrinhoDto = Pick<CompraProduto, "produtoId" | "quantidade">; 

