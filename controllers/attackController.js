import httpStatus from "../helpers/httpStatus.js";
import prisma from "../database/prisma.js";
import addSoftDelete from "../middlewares/softDelete.js";




export const attackController = () => {
const createAttack = async (req,res,next) =>{
    try{
    const { attackName, attackDmg, attackAcurracity, attackType, attackPriority  } = req.body;
    const createAttack = await prisma.pokemon.create({
        data: {
            attackName, 
            attackDmg, 
            attackAcurracity,
            attackType, 
            attackPriority
            }
    })
res.status(httpStatus.CREATED).json({
    success:true, 
    message: 'Attack Created',
    data:  createAttack
})
    }
    catch (error){
    next(error)
    } 
    finally{
        await prisma.$disconnect()
    }
}
const getAttack = async (_req, res, next) => {
    try{
    const gotAttack = await prisma.attack.findMany({
        where:{
            deletedAt: null
        }
    })
    res.status(httpStatus.FOUND).json({
        success:true, 
        message: 'Got Attack',
        data:gotAttack
})
    }
    catch (error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const getAttackById = async (req, res, next) =>{
    try{
    const  { id } = req.params
    const gotAttackById = await prisma.attack.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.status(httpStatus.FOUND).json({
        success:true, 
        message: 'Attack Got by ID',
        data:gotAttackById
})
    }
    catch(error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const updateAttack = async (req,res,next) => {
    try{
    const { id } = req.params
    const {attackName, attackDmg, attackAcurracity, attackType, attackPriority} = req.body;
    const updatedAttack = await prisma.attack.update({
        where: {
            id: Number(id)
        },
        data: {
            attackName, 
            attackDmg,
            attackAcurracity,
            attackType, 
            attackPriority
        }
    })
    res.status(httpStatus.OK).json({
        success:true, 
        message: 'Pokemon Updated',
        data: updatedAttack
    })
    }
    catch (error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const deleteAttack = async (req, res , next) =>{
    try{
        const {id } = req.params
        prisma.$use(addSoftDelete)
        const attackDeleted = await prisma.attack.delete({
            where:{
                id: Number(id)
            }
        })
        res.status(httpStatus.FOUND).json({
            success:true, 
            message: 'Attack Deleted',
            data: attackDeleted
        })
    }
    catch(error){
    next (error)
    }
    finally{
        await prisma.$disconnect()
    }
}


return {
    getAttack,
    getAttackById,
    createAttack,
    updateAttack,
    deleteAttack

}
}
