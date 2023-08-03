-- CreateTable
CREATE TABLE "pokemon_attack" (
    "id" SERIAL NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "attack1_id" INTEGER NOT NULL,
    "attack2_id" INTEGER NOT NULL,
    "attack3_id" INTEGER NOT NULL,
    "attack4_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "pokemon_attack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attack" (
    "id" SERIAL NOT NULL,
    "attack_dmg" INTEGER,
    "attack_acurracity" INTEGER NOT NULL,
    "attack_type" TEXT NOT NULL,
    "attack_priority" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "attack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon" (
    "id" SERIAL NOT NULL,
    "hp" INTEGER NOT NULL,
    "type1" TEXT NOT NULL,
    "type2" TEXT,
    "velocity" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "special_attack" INTEGER NOT NULL,
    "special_defense" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pokemon_attack" ADD CONSTRAINT "pokemon_attack_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_attack" ADD CONSTRAINT "pokemon_attack_attack1_id_fkey" FOREIGN KEY ("attack1_id") REFERENCES "attack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_attack" ADD CONSTRAINT "pokemon_attack_attack2_id_fkey" FOREIGN KEY ("attack2_id") REFERENCES "attack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_attack" ADD CONSTRAINT "pokemon_attack_attack3_id_fkey" FOREIGN KEY ("attack3_id") REFERENCES "attack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_attack" ADD CONSTRAINT "pokemon_attack_attack4_id_fkey" FOREIGN KEY ("attack4_id") REFERENCES "attack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
