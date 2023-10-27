/*
  Warnings:

  - You are about to drop the `clientesEnderecos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `clientesEnderecos` DROP FOREIGN KEY `clientesEnderecos_clienteCpf_fkey`;

-- DropForeignKey
ALTER TABLE `clientesEnderecos` DROP FOREIGN KEY `clientesEnderecos_enderecoCep_fkey`;

-- DropTable
DROP TABLE `clientesEnderecos`;

-- CreateTable
CREATE TABLE `clienteEnderecos` (
    `clienteCpf` CHAR(11) NOT NULL,
    `enderecoCep` CHAR(9) NOT NULL,
    `numero` INTEGER NOT NULL,
    `complemento` TEXT NULL,

    PRIMARY KEY (`clienteCpf`, `enderecoCep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compras` (
    `codCompra` CHAR(36) NOT NULL,
    `data_compra` DATETIME NOT NULL,
    `desconto` DECIMAL NOT NULL,
    `pagamentoCodPagamento` CHAR(40) NOT NULL,
    `clienteEnderecoClienteCpf` CHAR(11) NOT NULL,
    `clienteEnderecoEnderecoCep` CHAR(9) NOT NULL,

    PRIMARY KEY (`codCompra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagamentos` (
    `codPagamento` CHAR(36) NOT NULL,
    `tipo` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `pagamentos_tipo_key`(`tipo`),
    PRIMARY KEY (`codPagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clienteEnderecos` ADD CONSTRAINT `clienteEnderecos_clienteCpf_fkey` FOREIGN KEY (`clienteCpf`) REFERENCES `clientes`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clienteEnderecos` ADD CONSTRAINT `clienteEnderecos_enderecoCep_fkey` FOREIGN KEY (`enderecoCep`) REFERENCES `enderecos`(`cep`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_pagamentoCodPagamento_fkey` FOREIGN KEY (`pagamentoCodPagamento`) REFERENCES `pagamentos`(`codPagamento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras` ADD CONSTRAINT `compras_clienteEnderecoClienteCpf_clienteEnderecoEnderecoCe_fkey` FOREIGN KEY (`clienteEnderecoClienteCpf`, `clienteEnderecoEnderecoCep`) REFERENCES `clienteEnderecos`(`clienteCpf`, `enderecoCep`) ON DELETE RESTRICT ON UPDATE CASCADE;
