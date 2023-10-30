-- CreateTable
CREATE TABLE `Cliente` (
    `cpf` CHAR(11) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `celular` VARCHAR(13) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `senha` CHAR(80) NOT NULL,

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
CREATE TABLE `Pagamento` (
    `codPagamento` CHAR(36) NOT NULL,
    `tipo` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `Pagamento_tipo_key`(`tipo`),
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
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_pagamentoCodPagamento_fkey` FOREIGN KEY (`pagamentoCodPagamento`) REFERENCES `Pagamento`(`codPagamento`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
