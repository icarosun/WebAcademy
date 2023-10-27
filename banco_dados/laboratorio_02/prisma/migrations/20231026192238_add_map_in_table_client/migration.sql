/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Cliente`;

-- CreateTable
CREATE TABLE `clientes` (
    `cpf` CHAR(11) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `celular` VARCHAR(13) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `data_nascimento` DATE NOT NULL,

    UNIQUE INDEX `clientes_email_key`(`email`),
    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
