import { pokemonSchema , pokemonParamsSchema} from '../validations/pokemonSchema.js'
import { attackSchema, attackParamsSchema } from '../validations/attackSchema.js'
import { pokemonTrainerSchema, pokemonTrainerParamsSchema } from '../validations/pokemonTrainerSchema.js'
import { pokemonAttackParamsSchema, pokemonAttackSchema } from '../validations/pokemonAttackSchema.js'


//Pokemon Trainer Validation 
export const pokemonTrainerValidation = (req, _res,next)=> {
    const data = req.body
    const {error} = pokemonTrainerSchema.validate(data)
    if (error){
        next(error)
    }
    next()
}
export const pokemonTrainerParamsValidation = (req, _res,next)=> {
    const  { id } = req.params
    const {error} = pokemonTrainerParamsSchema.validate(id)
    if (error){
        next(error)
    }
    next()
}
//Pokemon Attack Validation
export const pokemonAttackValidation = (req, _res,next)=> {
    const data = req.body
    const {error} = pokemonAttackSchema.validate(data)
    if (error){
        next(error)
    }
    next()
}
export const pokemonAttackParamsValidation = (req, _res,next)=> {
    const  { id } = req.params
    const {error} = pokemonAttackParamsSchema.validate(id)
    if (error){
        next(error)
    }
    next()
}
//Pokemon Validation
export const pokemonValidation = (req, _res,next)=> {
    const data = req.body
    const {error} = pokemonSchema.validate(data)
    if (error){
        next(error)
    }
    next()
}
export const pokemonParamsValidation = (req, _res,next)=> {
    const  { id } = req.params
    const {error} = pokemonParamsSchema.validate(id)
    if (error){
        next(error)
    }
    next()
}
//Attack Validation
export const attackValidation = (req, _res,next)=> {
    const data = req.body
    const {error} = attackSchema.validate(data)
    if (error){
        next(error)
    }
    next()
}
export const attackParamsValidation = (req, _res,next)=> {
    const  { id } = req.params
    const {error} = attackParamsSchema.validate(id)
    if (error){
        next(error)
    }
    next()
}
