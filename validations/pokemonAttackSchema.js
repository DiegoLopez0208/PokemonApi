import Joi from 'joi'
export const pokemonAttackParamsSchema = Joi.object ({
    id: Joi.string ()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
    .min (0)
})

export const pokemonAttackSchema = Joi.object({
pokemonId: pattern(/^[0-9]+$/, 'numbers')
.required()
.min (0),


attack1Id: pattern(/^[0-9]+$/, 'numbers')
.required()
.min (0),

attack2Id :pattern(/^[0-9]+$/, 'numbers')
.required()
.min (0),

attack3Id: pattern(/^[0-9]+$/, 'numbers')
.required()
.min (0),


attack4Id: pattern(/^[0-9]+$/, 'numbers')
.required()
.min (0),

})