  
import express from 'express';
import { getAll, getById, getByType } from '../controllers/pokemons.js';

const pokeRouter = express.Router();

pokeRouter.get('/', getAll);
pokeRouter.get('/:id', getById);
pokeRouter.get('/type/:info', getByType);

export default pokeRouter