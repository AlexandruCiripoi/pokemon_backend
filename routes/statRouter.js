  
import express from 'express';
import { getAllStats, createNewStat, deleteStat } from '../controllers/stats.js';

const statRouter = express.Router();

statRouter.get('/', getAllStats);
statRouter.post('/', createNewStat);
statRouter.delete('/:id', deleteStat);


export default statRouter