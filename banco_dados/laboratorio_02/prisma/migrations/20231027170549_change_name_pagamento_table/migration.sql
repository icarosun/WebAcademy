/*
  Warnings:

  - You are about to alter the column `data_compra` on the `Compra` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `desconto` on the `Compra` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to alter the column `preco_base` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to drop the `Pagamentos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Compra` DROP FOREIGN KEY `Compra_pagamentoCodPagamento_fkey`;

-- AlterTable
ALTER TABLE `Compra` MODIFY `data_compra` DATETIME NOT NULL,
    MODIFY `desconto` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `Produto` MODIFY `preco_base` DECIMAL NOT NULL;

-- DropTable
DROP TABLE `Pagamentos`;

-- CreateTable
CREATE TABLE `Pagamento` (
    `codPagamento` CHAR(36) NOT NULL,
    `tipo` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `Pagamento_tipo_key`(`tipo`),
    PRIMARY KEY (`codPagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_pagamentoCodPagamento_fkey` FOREIGN KEY (`pagamentoCodPagamento`) REFERENCES `Pagamento`(`codPagamento`) ON DELETE RESTRICT ON UPDATE CASCADE;
