import { Router } from "express";
import { pokemonTrainerController } from "../controllers/pokemonTrainerController.js";
import { pokemonTrainerParamsValidation, pokemonTrainerValidation } from "../middlewares/validations.js";

export const pokemonTrainerRoutes = () =>{
    const pokemonTrainerRouter = Router()
    const { getPokemonTrainer, getPokemonTrainerById, createPokemonTrainer, updatePokemonTrainer, deletePokemonTrainer} = pokemonTrainerController ()
    pokemonTrainerRouter.route ('/pokemonTrainer')
    .get (getPokemonTrainer)
    .post (pokemonTrainerValidation, createPokemonTrainer)

    pokemonTrainerRouter.route ('/pokemonTrainer/:id')
    .get (getPokemonTrainerById)
    .put (pokemonTrainerParamsValidation,pokemonTrainerValidation,updatePokemonTrainer)
    .delete(deletePokemonTrainer)

    return pokemonTrainerRouter
}