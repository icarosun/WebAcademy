-- CreateTable
CREATE TABLE `produto` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `preco` DECIMAL(9, 2) NOT NULL,
    `estoque` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `produto_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
