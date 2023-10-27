/*
  Warnings:

  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clienteEnderecos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `compraProdutos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `compras` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `enderecos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pagamentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcategorias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `clienteEnderecos` DROP FOREIGN KEY `clienteEnderecos_clienteCpf_fkey`;

-- DropForeignKey
ALTER TABLE `clienteEnderecos` DROP FOREIGN KEY `clienteEnderecos_enderecoCep_fkey`;

-- DropForeignKey
ALTER TABLE `compraProdutos` DROP FOREIGN KEY `compraProdutos_compraCodCompra_fkey`;

-- DropForeignKey
ALTER TABLE `compraProdutos` DROP FOREIGN KEY `compraProdutos_produtoCodProduto_fkey`;

-- DropForeignKey
ALTER TABLE `compras` DROP FOREIGN KEY `compras_clienteEnderecoClienteCpf_clienteEnderecoEnderecoCe_fkey`;

-- DropForeignKey
ALTER TABLE `compras` DROP FOREIGN KEY `compras_pagamentoCodPagamento_fkey`;

-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `produtos_subcategoriaCodSubcategoria_fkey`;

-- DropForeignKey
ALTER TABLE `subcategorias` DROP FOREIGN KEY `subcategorias_categoriaCodCategoria_fkey`;

-- DropTable
DROP TABLE `categorias`;

-- DropTable
DROP TABLE `clienteEnderecos`;

-- DropTable
DROP TABLE `clientes`;

-- DropTable
DROP TABLE `compraProdutos`;

-- DropTable
DROP TABLE `compras`;

-- DropTable
DROP TABLE `enderecos`;

-- DropTable
DROP TABLE `pagamentos`;

-- DropTable
DROP TABLE `produtos`;

-- DropTable
DROP TABLE `subcategorias`;

-- CreateTable
CREATE TABLE `Cliente` (
    `cpf` CHAR(11) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `celular` VARCHAR(13) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `data_nascimento` DATE NOT NULL,

    UNIQUE INDEX `Cliente_email_key`(`email`),
    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `cep` CHAR(9) NOT NULL,

    PRIMARY KEY (`cep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clienteEndereco` (
    `clienteCpf` CHAR(11) NOT NULL,
    `enderecoCep` CHAR(9) NOT NULL,
    `numero` INTEGER NOT NULL,
    `complemento` TEXT NULL,

    PRIMARY KEY (`clienteCpf`, `enderecoCep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `codCompra` CHAR(36) NOT NULL,
    `data_compra` DATETIME NOT NULL,
    `desconto` DECIMAL NOT NULL,
    `pagamentoCodPagamento` CHAR(40) NOT NULL,
    `clienteEnderecoClienteCpf` CHAR(11) NOT NULL,
    `clienteEnderecoEnderecoCep` CHAR(9) NOT NULL,

    PRIMARY KEY (`codCompra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamentos` (
    `codPagamento` CHAR(36) NOT NULL,
    `tipo` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `Pagamentos_tipo_key`(`tipo`),
    PRIMARY KEY (`codPagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `codCategoria` CHAR(36) NOT NULL,
    `nome` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `Categoria_nome_key`(`nome`),
    PRIMARY KEY (`codCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `codSubcategoria` CHAR(36) NOT NULL,
    `nome` VARCHAR(20) NOT NULL,
    `categoriaCodCategoria` CHAR(36) NULL,

    UNIQUE INDEX `Subcategoria_nome_key`(`nome`),
    PRIMARY KEY (`codSubcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
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
CREATE TABLE `compraProduto` (
    `compraCodCompra` CHAR(36) NOT NULL,
    `produtoCodProduto` CHAR(36) NOT NULL,

    PRIMARY KEY (`compraCodCompra`, `produtoCodProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clienteEndereco` ADD CONSTRAINT `clienteEndereco_clienteCpf_fkey` FOREIGN KEY (`clienteCpf`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clienteEndereco` ADD CONSTRAINT `clienteEndereco_enderecoCep_fkey` FOREIGN KEY (`enderecoCep`) REFERENCES `Endereco`(`cep`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_pagamentoCodPagamento_fkey` FOREIGN KEY (`pagamentoCodPagamento`) REFERENCES `Pagamentos`(`codPagamento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_clienteEnderecoClienteCpf_clienteEnderecoEnderecoCep_fkey` FOREIGN KEY (`clienteEnderecoClienteCpf`, `clienteEnderecoEnderecoCep`) REFERENCES `clienteEndereco`(`clienteCpf`, `enderecoCep`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_categoriaCodCategoria_fkey` FOREIGN KEY (`categoriaCodCategoria`) REFERENCES `Categoria`(`codCategoria`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_subcategoriaCodSubcategoria_fkey` FOREIGN KEY (`subcategoriaCodSubcategoria`) REFERENCES `Subcategoria`(`codSubcategoria`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compraProduto` ADD CONSTRAINT `compraProduto_compraCodCompra_fkey` FOREIGN KEY (`compraCodCompra`) REFERENCES `Compra`(`codCompra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compraProduto` ADD CONSTRAINT `compraProduto_produtoCodProduto_fkey` FOREIGN KEY (`produtoCodProduto`) REFERENCES `Produto`(`codProduto`) ON DELETE RESTRICT ON UPDATE CASCADE;
