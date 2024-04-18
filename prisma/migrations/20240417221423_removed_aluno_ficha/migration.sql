/*
  Warnings:

  - You are about to drop the `alunoficha` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `alunoId` to the `Ficha` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `alunoficha` DROP FOREIGN KEY `AlunoFicha_idAluno_fkey`;

-- DropForeignKey
ALTER TABLE `alunoficha` DROP FOREIGN KEY `AlunoFicha_idFicha_fkey`;

-- AlterTable
ALTER TABLE `ficha` ADD COLUMN `alunoId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `alunoficha`;

-- AddForeignKey
ALTER TABLE `Ficha` ADD CONSTRAINT `Ficha_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;
