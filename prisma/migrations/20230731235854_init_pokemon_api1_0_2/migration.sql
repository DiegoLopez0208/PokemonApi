/*
  Warnings:

  - A unique constraint covering the columns `[attack_name]` on the table `attack` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `attack_name` to the `attack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attack" ADD COLUMN     "attack_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pokemon" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "attack_attack_name_key" ON "attack"("attack_name");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_name_key" ON "pokemon"("name");
