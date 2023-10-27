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
