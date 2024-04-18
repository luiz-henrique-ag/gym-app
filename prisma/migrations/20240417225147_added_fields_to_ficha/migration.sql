/*
  Warnings:

  - Added the required column `descricao` to the `Ficha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Ficha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ficha` ADD COLUMN `descricao` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;
