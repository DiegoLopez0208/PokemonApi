-- CreateTable
CREATE TABLE "pokemon_trainer" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birth_year" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "pokemon_attack_id" INTEGER NOT NULL,

    CONSTRAINT "pokemon_trainer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_trainer_email_key" ON "pokemon_trainer"("email");

-- AddForeignKey
ALTER TABLE "pokemon_trainer" ADD CONSTRAINT "pokemon_trainer_pokemon_attack_id_fkey" FOREIGN KEY ("pokemon_attack_id") REFERENCES "pokemon_attack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
