import Joi from 'joi'
export const pokemonTrainerParamsSchema = Joi.object ({
    id: Joi.string ()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
    .min (0)
})

export const pokemonTrainerSchema = Joi.object({
username: Joi.string()
.min(5)
.max(50)
.alphanum()
.required(),

password: Joi.string()
.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

email: Joi.string()
.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

birth_year: Joi.number()
.integer()
.min(1900)
.max(2013),

pokemonAttackId : Joi.string()
.pattern(/^[0-9]+$/, 'numbers')
    .required()
    .min (0)

})