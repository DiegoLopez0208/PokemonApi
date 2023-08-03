
import Joi from 'joi'
export const pokemonParamsSchema = Joi.object ({
    id: Joi.string ()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
    .min (0)
})
export const pokemonSchema = Joi.object({
    pokemonName: Joi.string()
    .required()
    .min(0)
    .max(50),

    hp:Joi.number()
    .min (0)
    .max (10000)
    .required(),

    type1: Joi.string()
    .min (0)
    .max (30)
    .required(),
    type2: Joi.string()
    .min (0)
    .max (30)
    .required(),

    velocity: Joi.number()
    .min (0)
    .max (1000)
    .required(),

    defense : Joi.number()
    .min (0)
    .max (1000)
    .required(),

    specialAttack: Joi.number()
    .min (0)
    .max (1000)
    .required(),

    specialDefense: Joi.number()
    .min (0)
    .max (1000)
    .required(),

    attack : Joi.number()
    .min (0)
    .max (1000)
    .required(),
})