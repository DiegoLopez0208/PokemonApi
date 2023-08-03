import express from 'express'
import errorHandler from './middlewares/errorHandler.js'
import {pokemonRoutes} from './routes/pokemonRouter.js'
import {attackRoutes} from './routes/attackRouter.js'
import { pokemonAttackRoutes } from './routes/pokemonAttackRouter.js'
import { pokemonTrainerRoutes } from './routes/pokemonTrainerRouter.js'
import { authRoutes } from './routes/authRouter.js'
import cors from 'cors'
import {expressjwt as jwt } from 'express-jwt'
import dotenv from 'dotenv'

dotenv.config ()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({extended:true}))
app.use (express.json())

app.use(cors({
    origin:'http://localhost:5500'
}))
app.use(jwt({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"],
}).unless ({path: ["/api/auth/login", "api/auth/refresh"]})
)
app.use ('/api', authRoutes(),pokemonAttackRoutes(),pokemonTrainerRoutes(), pokemonRoutes(), attackRoutes())




app.use(errorHandler)

app.listen (PORT, ()=>{
    console.log (`Se esta inicializando en el puerto ${PORT}`)
})