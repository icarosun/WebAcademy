/*
  Warnings:

  - You are about to alter the column `data_compra` on the `Compra` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `desconto` on the `Compra` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to alter the column `preco_base` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- DropIndex
DROP INDEX `Subcategoria_nome_key` ON `Subcategoria`;

-- AlterTable
ALTER TABLE `Compra` MODIFY `data_compra` DATETIME NOT NULL,
    MODIFY `desconto` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `Produto` MODIFY `preco_base` DECIMAL NOT NULL;
