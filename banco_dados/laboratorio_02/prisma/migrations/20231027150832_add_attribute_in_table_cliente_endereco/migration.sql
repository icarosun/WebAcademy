/*
  Warnings:

  - Added the required column `numero` to the `clientesEnderecos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientesEnderecos` ADD COLUMN `complemento` TEXT NULL,
    ADD COLUMN `numero` INTEGER NOT NULL;
