  
import express from 'express';
import { getAll, getById, getByIdAndInfo } from '../controllers/pokemons.js';

const pokeRouter = express.Router();

pokeRouter.get('/', getAll);
pokeRouter.get('/:id', getById);
pokeRouter.get('/:id/:info', getByIdAndInfo);

export default pokeRouter