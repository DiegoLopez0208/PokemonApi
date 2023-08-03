import httpStatus from "../helpers/httpStatus.js";
import prisma from "../database/prisma.js";
import addSoftDelete from "../middlewares/softDelete.js";



export const pokemonAttackController = () => {
const createPokemonAttack = async (req,res,next) =>{
    try{
    const {  pokemonId, attack1Id,attack2Id, attack3Id,attack4Id } = req.body;
    const pokemonCreated = await prisma.pokemonAttack.create({
        data: {
            pokemonId,
            attack1Id,
            attack2Id,
            attack3Id,
            attack4Id
            }
    })
res.status(httpStatus.CREATED).json({
    success:true, 
    message: 'Pokemon Relation Created',
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
const getPokemonAttack = async (_req, res, next) => {
    try{
    const getPokemonAttack = await prisma.pokemonAttack.findMany({
        where:{ deletedAt: null }
    })
    const attack1Name = await prisma.attack.findUnique({ 
        where: { id: attack1Id }, 
        select: { name: true } })
    const attack2Name = await prisma.attack.findUnique({ 
        where: { id: attack2Id },
        select: { name: true } })
    const attack3Name = await prisma.attack.findUnique({
        where: { id: attack3Id },
        select: { name: true } })
    const attack4Name = await prisma.attack.findUnique({ 
        where: { id: attack4Id }, 
        select: { name: true } })
    const pokemonName = await prisma.pokemon.findUnique({
        where: {id: pokemonId }, 
        select: {name: true} })
    res.status(httpStatus.OK).json({
        success:true,
        message: 'Got Pokemon',
        data: getPokemonAttack,
        attack1Name: attack1Name.name,
        attack2Name: attack2Name.name,
        attack3Name: attack3Name.name,
        attack4Name: attack4Name.name,
        pokemonName : pokemonName.name
    })
    }
    catch (error){
        next(error)
    }
    finally{
        await prisma.$disconnect
    }
}
const getPokemonAttackById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pokemonAttack = await prisma.pokemonAttack.findUnique({
            where: { id: Number(id) },
            include: {
                pokemon: { select: { pokemonName: true } },
                attack1: { select: { attackName: true } },
                attack2: { select: { attackName: true } },
                attack3: { select: { attackName: true } },
                attack4: { select: { attackName: true } },
            },
        });
        const { pokemon, attack1, attack2, attack3, attack4 } = pokemonAttack;
        res.status(200).json({
            success: true,
            message: 'Got Pokemon Relation by ID',
            data: {
                pokemonName: pokemon.pokemonName,
                attack1Name: attack1?.attackName,
                attack2Name: attack2?.attackName,
                attack3Name: attack3?.attackName,
                attack4Name: attack4?.attackName,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        await prisma.$disconnect();
    }
}
const updatePokemonAttack = async (req,res,next) => {
    try{
    const { id } = req.params
    const { pokemonId, attack1Id,attack2Id, attack3Id,attack4Id } = req.body;
    const updatedPokemon = await prisma.pokemonAttack.update({
        where: {
            id: Number(id)
        },
        data: {
            pokemonId,
            attack1Id,
            attack2Id,
            attack3Id,
            attack4Id
        }
    })
    res.status(httpStatus.OK).json({
        success:true,
        message: 'Pokemon Relation Updated',
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
const deletePokemonAttack = async (req, res , next) =>{
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
            message: 'Pokemon Relation Deleted',
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
    getPokemonAttack,
    getPokemonAttackById,
    createPokemonAttack,
    updatePokemonAttack,
    deletePokemonAttack

}
}
