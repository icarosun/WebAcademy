/*
  Warnings:

  - You are about to alter the column `data_compra` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `desconto` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `compras` MODIFY `data_compra` DATETIME NOT NULL,
    MODIFY `desconto` DECIMAL NOT NULL;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `codSubcategoria` CHAR(36) NOT NULL,
    `nome` VARCHAR(20) NOT NULL,
    `categoriaCodCategoria` CHAR(36) NULL,

    UNIQUE INDEX `Subcategoria_nome_key`(`nome`),
    PRIMARY KEY (`codSubcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_categoriaCodCategoria_fkey` FOREIGN KEY (`categoriaCodCategoria`) REFERENCES `Categoria`(`codCategoria`) ON DELETE SET NULL ON UPDATE CASCADE;
