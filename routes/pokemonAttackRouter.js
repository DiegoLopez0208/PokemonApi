import { Router } from "express";
import { pokemonAttackController } from '../controllers/pokemonAttackController.js'
import { pokemonAttackParamsValidation, pokemonAttackValidation } from "../middlewares/validations.js";

export const pokemonAttackRoutes = () =>{
    const pokemonAttackRouter = Router()
    const { getPokemonAttack, getPokemonAttackById, createPokemonAttack, updatePokemonAttack, deletePokemonAttack} = pokemonAttackController ()
    pokemonAttackRouter.route ('/pokemonAttack')
    .get (getPokemonAttack)
    .post (pokemonAttackValidation,createPokemonAttack)

    pokemonAttackRouter.route ('/pokemonAttack/:id')
    .get (getPokemonAttackById)
    .put (pokemonAttackParamsValidation,pokemonAttackValidation,updatePokemonAttack)
    .delete(deletePokemonAttack)

    return pokemonAttackRouter

}