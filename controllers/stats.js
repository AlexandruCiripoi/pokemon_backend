import asyncHandler from "../middlewares/asyncHandler.js"
import Stat from '../models/Stat.js';
import ErrorResponse from '../utils/ErrorResponse.js';



export const getAllStats = asyncHandler(async (req, res) => {
    const posts = await Stat.find().populate('author');
    res.json(posts);
  });


export const createNewStat = asyncHandler(async (req, res) => {
    const { winner, loser, battleCategory } = req.body;
    if (!winner || !loser || !battleCategory )
      throw new ErrorResponse('Winner, loser, battle category are required fields');
    const newPost = await Stat.create({
        winner,
        loser,
        battleCategory
    });
    res.status(201).json(newPost);
  });

  export const deleteStat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const post = await Stat.findById(id);
    if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    await post.delete();
    res.json({ success: `Post with id of ${id} was deleted` });
  });