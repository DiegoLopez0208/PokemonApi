import httpStatus from "../helpers/httpStatus.js";
import prisma from "../database/prisma.js";
import addSoftDelete from "../middlewares/softDelete.js";
import bcrypt from "bcrypt";



export const pokemonTrainerController = () => {
const createPokemonTrainer = async (req,res,next) =>{
    try{
    const { username, password, email, birth_year, pokemonAttackId   } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt) 
    const pokemonTrainerCreated = await prisma.pokemonTrainer.create({
        data: {
        username,
        password : hashedPassword,
        email,
        birth_year: new Date (birth_year),
        pokemonAttackId 
            }
    })
res.status(httpStatus.CREATED).json({
    success:true, 
    message: 'Pokemon Trainer Created',
    data: pokemonTrainerCreated
})
    }
    catch (error){
    next(error)
    } 
    finally{
        await prisma.$disconnect()
    }
}
const getPokemonTrainer = async (_req, res, next) => {
    try{
    const getPokemonTrainer = await prisma.pokemonTrainer.findMany({
        where:{
            deletedAt: null
        }
    })
    res.status(httpStatus.OK).json({
        success:true,
        message: 'Got  Pokemon Trainer',
        data: getPokemonTrainer
    })
    }
    catch (error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const getPokemonTrainerById = async (req, res, next) =>{
    try{
    const  { id } = req.params
    const pokemonTrainerId = await prisma.pokemonTrainer.findUnique({
        where: { id: Number(id) }, 
        include: {
            pokemonAttack: {
                include:{
                pokemon: {select: {pokemonName: true}},
            },
        },
    }
});
const {pokemon} = pokemonAttack
    res.status(httpStatus.OK).json({
        success: true,
        message: 'Got Pokemon Trainer by ID',
        data: pokemonTrainerId,
        pokemonName: pokemon?.pokemonName
    })
    }
    catch(error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const updatePokemonTrainer = async (req,res,next) => {
    try{
    const { id } = req.params
    const { username, password, email, birth_year  , pokemonAttackId } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt) 
    const updatedPokemonTrainer = await prisma.pokemonTrainer.update({
        where: {
            id: Number(id)
        },
        data: {
        username,
        password : hashedPassword,
        email,
        birth_year: new Date (birth_year),
        pokemonAttackId 
        
        }
    })
    res.status(httpStatus.OK).json({
        success:true,
        message: 'Pokemon Trainer Updated',
        data: updatedPokemonTrainer
    })
    }
    catch (error){
        next(error)
    }
    finally{
        await prisma.$disconnect()
    }
}
const deletePokemonTrainer = async (req, res , next) =>{
    try{
        const {id } = req.params
        prisma.$use(addSoftDelete)
        const deletedPokemonTrainer = await prisma.pokemonTrainer.delete({
            where:{
                id: Number(id)
            }
        })
        res.status(httpStatus.FOUND).json({
            success:true,
            message: 'Pokemon Trainer Deleted',
            data:deletedPokemonTrainer
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
    getPokemonTrainer,
    getPokemonTrainerById,
    createPokemonTrainer,
    updatePokemonTrainer,
    deletePokemonTrainer

}
}
