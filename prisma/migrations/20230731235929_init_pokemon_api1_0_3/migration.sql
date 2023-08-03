/*
  Warnings:

  - You are about to drop the column `name` on the `pokemon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pokemon_name]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pokemon_name` to the `pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "pokemon_name_key";

-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "name",
ADD COLUMN     "pokemon_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_pokemon_name_key" ON "pokemon"("pokemon_name");
