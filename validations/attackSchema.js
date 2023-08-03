
import Joi from 'joi'
export const attackParamsSchema = Joi.object ({
    id: Joi.string ()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
    .min (0)
})
export const attackSchema = Joi.object({
    attackName: Joi.string ()
    .min(3)
    .required,

    attackDmg: Joi.number()
    .min (0)
    .max(300)
    .required(),

    attackType: Joi.string()
    .min(3)
    .max(50)
    .required(),

    attackAcurracity: Joi.number()
    .min(200)
    .max(0)
    .required(),

    attackPriority: Joi.number()
    .min(-10)
    .max(10)
    .required()

})