import { Router } from "express";
import { attackController } from '../controllers/attackController.js'
import { attackParamsValidation, attackValidation } from "../middlewares/validations.js";

export const attackRoutes = () =>{
    const attackRouter = Router()
    const { getAttack, getAttackById, createAttack, updateAttack, deleteAttack} = attackController ()
    attackRouter.route ('/attack')
    .get (getAttack)
    .post (attackValidation,createAttack)

    attackRouter.route ('/attack/:id')
    .get (getAttackById)
    .put (attackParamsValidation,attackValidation,updateAttack)
    .delete(deleteAttack)

    return attackRouter

}