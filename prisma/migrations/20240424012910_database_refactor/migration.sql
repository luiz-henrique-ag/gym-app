/*
  Warnings:

  - You are about to drop the column `cpf` on the `personal` table. All the data in the column will be lost.
  - You are about to drop the column `dataNascimento` on the `personal` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `personal` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `personal` table. All the data in the column will be lost.
  - You are about to drop the `aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exercicioficha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ficha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plano` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `birthDate` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cellphone` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Personal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `aluno` DROP FOREIGN KEY `Aluno_planoId_fkey`;

-- DropForeignKey
ALTER TABLE `exercicioficha` DROP FOREIGN KEY `ExercicioFicha_idExercicio_fkey`;

-- DropForeignKey
ALTER TABLE `exercicioficha` DROP FOREIGN KEY `ExercicioFicha_idFicha_fkey`;

-- DropForeignKey
ALTER TABLE `ficha` DROP FOREIGN KEY `Ficha_alunoId_fkey`;

-- AlterTable
ALTER TABLE `personal` DROP COLUMN `cpf`,
    DROP COLUMN `dataNascimento`,
    DROP COLUMN `nome`,
    DROP COLUMN `telefone`,
    ADD COLUMN `birthDate` DATETIME(3) NOT NULL,
    ADD COLUMN `cellphone` VARCHAR(14) NOT NULL,
    ADD COLUMN `document` VARCHAR(14) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `aluno`;

-- DropTable
DROP TABLE `exercicio`;

-- DropTable
DROP TABLE `exercicioficha`;

-- DropTable
DROP TABLE `ficha`;

-- DropTable
DROP TABLE `plano`;

-- CreateTable
CREATE TABLE `Client` (
    `subscription` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `document` VARCHAR(14) NOT NULL,
    `cellphone` VARCHAR(14) NOT NULL,
    `birthDate` DATETIME(3) NULL,
    `height` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `objective` ENUM('HYPERTROPHY', 'STRENGTH', 'WEIGHTLOSS', 'HEALTH') NOT NULL,
    `dueDate` VARCHAR(191) NOT NULL,
    `observacoes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`subscription`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClientPlanHistory` (
    `plan` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `clientSubscription` INTEGER NOT NULL,

    UNIQUE INDEX `ClientPlanHistory_clientSubscription_key`(`clientSubscription`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClientPlan` (
    `planId` INTEGER NOT NULL,
    `clientSubscription` INTEGER NOT NULL,

    UNIQUE INDEX `ClientPlan_planId_key`(`planId`),
    UNIQUE INDEX `ClientPlan_clientSubscription_key`(`clientSubscription`),
    PRIMARY KEY (`planId`, `clientSubscription`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `plan` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `status` ENUM('PENDING', 'PAID', 'DUE') NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `paymentDate` DATETIME(3) NULL,
    `clientSubscription` INTEGER NOT NULL,

    UNIQUE INDEX `Payment_clientSubscription_key`(`clientSubscription`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Workout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `clientSubscription` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkoutExercise` (
    `workoutId` INTEGER NOT NULL,
    `exerciseId` INTEGER NOT NULL,
    `sets` INTEGER NOT NULL,
    `reps` INTEGER NOT NULL,

    UNIQUE INDEX `WorkoutExercise_workoutId_key`(`workoutId`),
    UNIQUE INDEX `WorkoutExercise_exerciseId_key`(`exerciseId`),
    PRIMARY KEY (`workoutId`, `exerciseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClientPlanHistory` ADD CONSTRAINT `ClientPlanHistory_clientSubscription_fkey` FOREIGN KEY (`clientSubscription`) REFERENCES `Client`(`subscription`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClientPlan` ADD CONSTRAINT `ClientPlan_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClientPlan` ADD CONSTRAINT `ClientPlan_clientSubscription_fkey` FOREIGN KEY (`clientSubscription`) REFERENCES `Client`(`subscription`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_clientSubscription_fkey` FOREIGN KEY (`clientSubscription`) REFERENCES `Client`(`subscription`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Workout` ADD CONSTRAINT `Workout_clientSubscription_fkey` FOREIGN KEY (`clientSubscription`) REFERENCES `Client`(`subscription`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkoutExercise` ADD CONSTRAINT `WorkoutExercise_workoutId_fkey` FOREIGN KEY (`workoutId`) REFERENCES `Workout`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkoutExercise` ADD CONSTRAINT `WorkoutExercise_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
