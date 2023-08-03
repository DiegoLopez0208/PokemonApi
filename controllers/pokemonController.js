import httpStatus from "../helpers/httpStatus.js";
import prisma from "../database/prisma.js";
import addSoftDelete from "../middlewares/softDelete.js";



export const pokemonController = () => {
const createPokemon = async (req,res,next) =>{
    try{
    const { hp, type1, type2, velocity, defense, specialAttack, specialDefense, attack } = req.body;
    const pokemonCreated = await prisma.pokemon.create({
        data: {
            hp,
            type1,
            type2,
            velocity,
            defense,
            specialAttack,
            specialDefense,
            attack
            }
    })
res.status(httpStatus.CREATED).json({
    success:true, 
    message: 'Pokemon Created',
    data: pokemonCreated
})
    }
    catch (error){
    next(error)
    } 
    finally{
        await prisma.$disconnect()
    }
}
const getPokemon = async (_req, res, next) => {
    try{
    const getPokemon = await prisma.pokemon.findMany({
        where:{
            deletedAt: null
        }
    })
    res.status(httpStatus.OK).json({
        success:true,
        message: 'Got Pokemon',
        data: getPokemon
    })
    }
    catch (error){
        next(error)
    }
    finally{
        await prisma.$disconnect
    }
}
const getPokemonById = async (req, res, next) =>{
    try{
    const  { id } = req.params
    const pokemonId = await prisma.pokemon.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.status(httpStatus.OK).json({
        success: true,
        message: 'Got Pokemon by ID',
        data: pokemonId
    })
    }
    catch(error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const updatePokemon = async (req,res,next) => {
    try{
    const { id } = req.params
    const { hp, type1, type2, velocity, defense, specialAttack, specialDefense, attack } = req.body;
    const updatedPokemon = await prisma.pokemon.update({
        where: {
            id: Number(id)
        },
        data: {
            hp, 
            type1, 
            type2, 
            velocity, 
            defense, 
            specialAttack, 
            specialDefense, 
            attack
        }
    })
    res.status(httpStatus.OK).json({
        success:true,
        message: 'Pokemon Updated',
        data: updatedPokemon
    })
    }
    catch (error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const deletePokemon = async (req, res , next) =>{
    try{
        const {id } = req.params
        prisma.$use(addSoftDelete)
        const deletedPokemon = await prisma.pokemon.delete({
            where:{
                id: Number(id)
            }
        })
        res.status(httpStatus.FOUND).json({
            success:true,
            message: 'Pokemon Deleted',
            data:deletedPokemon
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
    getPokemon,
    getPokemonById,
    createPokemon,
    updatePokemon,
    deletePokemon

}
}
