/*
  Warnings:

  - You are about to alter the column `data_compra` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `desconto` on the `compras` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subcategoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Subcategoria` DROP FOREIGN KEY `Subcategoria_categoriaCodCategoria_fkey`;

-- AlterTable
ALTER TABLE `compras` MODIFY `data_compra` DATETIME NOT NULL,
    MODIFY `desconto` DECIMAL NOT NULL;

-- DropTable
DROP TABLE `Categoria`;

-- DropTable
DROP TABLE `Subcategoria`;

-- CreateTable
CREATE TABLE `categorias` (
    `codCategoria` CHAR(36) NOT NULL,
    `nome` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `categorias_nome_key`(`nome`),
    PRIMARY KEY (`codCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategorias` (
    `codSubcategoria` CHAR(36) NOT NULL,
    `nome` VARCHAR(20) NOT NULL,
    `categoriaCodCategoria` CHAR(36) NULL,

    UNIQUE INDEX `subcategorias_nome_key`(`nome`),
    PRIMARY KEY (`codSubcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `codProduto` CHAR(36) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `preco_base` DECIMAL NOT NULL,
    `fabricante` VARCHAR(50) NOT NULL,
    `modelo` VARCHAR(100) NOT NULL,
    `numero_serie` VARCHAR(100) NULL,
    `subcategoriaCodSubcategoria` CHAR(36) NULL,

    PRIMARY KEY (`codProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compraProdutos` (
    `compraCodCompra` CHAR(36) NOT NULL,
    `produtoCodProduto` CHAR(36) NOT NULL,

    PRIMARY KEY (`compraCodCompra`, `produtoCodProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subcategorias` ADD CONSTRAINT `subcategorias_categoriaCodCategoria_fkey` FOREIGN KEY (`categoriaCodCategoria`) REFERENCES `categorias`(`codCategoria`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_subcategoriaCodSubcategoria_fkey` FOREIGN KEY (`subcategoriaCodSubcategoria`) REFERENCES `subcategorias`(`codSubcategoria`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compraProdutos` ADD CONSTRAINT `compraProdutos_compraCodCompra_fkey` FOREIGN KEY (`compraCodCompra`) REFERENCES `compras`(`codCompra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compraProdutos` ADD CONSTRAINT `compraProdutos_produtoCodProduto_fkey` FOREIGN KEY (`produtoCodProduto`) REFERENCES `produtos`(`codProduto`) ON DELETE RESTRICT ON UPDATE CASCADE;
