/*
  Warnings:

  - You are about to drop the column `observacoes` on the `client` table. All the data in the column will be lost.
  - Added the required column `obs` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `observacoes`,
    ADD COLUMN `obs` VARCHAR(191) NOT NULL;
