/*
  Warnings:

  - You are about to alter the column `data_compra` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `desconto` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `compras` MODIFY `data_compra` DATETIME NOT NULL,
    MODIFY `desconto` DECIMAL NOT NULL;

-- CreateTable
CREATE TABLE `Categoria` (
    `codCategoria` CHAR(36) NOT NULL,
    `nome` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `Categoria_nome_key`(`nome`),
    PRIMARY KEY (`codCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
