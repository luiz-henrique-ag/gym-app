-- CreateTable
CREATE TABLE `Aluno` (
    `matricula` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `telefone` VARCHAR(14) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `altura` INTEGER NOT NULL,
    `peso` DOUBLE NOT NULL,
    `objetivo` VARCHAR(191) NOT NULL,
    `planoId` INTEGER NOT NULL,
    `vencimento` VARCHAR(191) NOT NULL,
    `ultimoPagamento` VARCHAR(191) NOT NULL,
    `observacoes` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Aluno_planoId_key`(`planoId`),
    PRIMARY KEY (`matricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plano` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `telefone` VARCHAR(14) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ficha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExercicioFicha` (
    `idFicha` INTEGER NOT NULL,
    `idExercicio` INTEGER NOT NULL,
    `series` INTEGER NOT NULL,
    `repeticoes` INTEGER NOT NULL,

    PRIMARY KEY (`idFicha`, `idExercicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoFicha` (
    `idAluno` INTEGER NOT NULL,
    `idFicha` INTEGER NOT NULL,

    PRIMARY KEY (`idAluno`, `idFicha`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_planoId_fkey` FOREIGN KEY (`planoId`) REFERENCES `Plano`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExercicioFicha` ADD CONSTRAINT `ExercicioFicha_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExercicioFicha` ADD CONSTRAINT `ExercicioFicha_idExercicio_fkey` FOREIGN KEY (`idExercicio`) REFERENCES `Exercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoFicha` ADD CONSTRAINT `AlunoFicha_idAluno_fkey` FOREIGN KEY (`idAluno`) REFERENCES `Aluno`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoFicha` ADD CONSTRAINT `AlunoFicha_idFicha_fkey` FOREIGN KEY (`idFicha`) REFERENCES `Ficha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
