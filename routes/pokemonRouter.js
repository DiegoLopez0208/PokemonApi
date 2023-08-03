import { Router } from "express";
import { pokemonController } from '../controllers/pokemonController.js'
import { pokemonValidation, pokemonParamsValidation } from "../middlewares/validations.js"

export const pokemonRoutes = () =>{
    const pokemonRouter = Router()
    const { getPokemon, getPokemonById, createPokemon, updatePokemon, deletePokemon} = pokemonController ()
    pokemonRouter.route ('/pokemon')
    .get (getPokemon)
    .post (pokemonValidation, createPokemon)

    pokemonRouter.route ('/pokemon/:id')
    .get (getPokemonById)
    .put (pokemonParamsValidation,pokemonValidation,updatePokemon)
    .delete(deletePokemon)
    return pokemonRouter
}