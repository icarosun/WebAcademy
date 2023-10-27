/*
  Warnings:

  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Endereco`;

-- CreateTable
CREATE TABLE `enderecos` (
    `cep` CHAR(9) NOT NULL,

    PRIMARY KEY (`cep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientesEnderecos` (
    `clienteCpf` CHAR(11) NOT NULL,
    `enderecoCep` CHAR(9) NOT NULL,

    PRIMARY KEY (`clienteCpf`, `enderecoCep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clientesEnderecos` ADD CONSTRAINT `clientesEnderecos_clienteCpf_fkey` FOREIGN KEY (`clienteCpf`) REFERENCES `clientes`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clientesEnderecos` ADD CONSTRAINT `clientesEnderecos_enderecoCep_fkey` FOREIGN KEY (`enderecoCep`) REFERENCES `enderecos`(`cep`) ON DELETE RESTRICT ON UPDATE CASCADE;
