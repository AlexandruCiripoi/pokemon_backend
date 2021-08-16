import asyncHandler from "../middlewares/asyncHandler.js"
import Pokemon from '../models/Pokemon.js';
import ErrorResponse from '../utils/ErrorResponse.js';

// let dataPath = "../pokemon_backend/pokedex.json"
// let results = fs.readFileSync(dataPath)


export const getAll = asyncHandler (async(req, res) => {
    const skip = parseInt(req.query.skip) - 1
    const limit = parseInt(req.query.limit)
    const fullQuery = await Pokemon.find()
    const query = await Pokemon.find().sort('id').skip(skip).limit(limit)
    res.status(200).json({total: fullQuery.length, items: query});
})

export const getById = asyncHandler (async(req, res) => {
    const { id } = req.params;
    const isString = isNaN(id)
    let query
    if (isString) {
        query = {'name.english': id.charAt(0).toUpperCase() + id.slice(1).toLowerCase()}
    } else {
        query = {id}
    }
    const pokemon = await Pokemon.findOne(query);
    if (!pokemon) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    res.status(200).json(pokemon);
})


export const getByIdAndInfo = asyncHandler (async(req, res) => {
    // let parsed = JSON.parse(results)
    // const { id } = req.params;
    // const { info } = req.params;
    // const found = parsed.find(element => element.id == id);
    // if (info == "name") {
    //     res.status(200).json(found.name);
    // } else if (info == "type") {
    //     res.status(200).json(found.type);
    // } else if (info == "base") {
    //     res.status(200).json(found.base)
    // } else {
    //     throw new Error('invalid path')
    // }
})
