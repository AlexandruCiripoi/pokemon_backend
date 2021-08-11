
import { json } from 'express'
import fs from 'fs'
import asyncHandler from "../middlewares/asyncHandler.js"


let dataPath = "../pokemon_backend/pokedex.json"
let results = fs.readFileSync(dataPath)


export const getAll = asyncHandler (async(req, res) => {
    let parsed = JSON.parse(results)
    const skip = parseInt(req.query.skip)
    const limit = parseInt(req.query.limit)
    const response = parsed.splice(skip, limit)
    res.status(200).json({total: parsed.length, items: response});
})

export const getById = asyncHandler (async(req, res) => {
    const { id } = req.params;
    const found = parsed.find(element => element.id == id);
    if (!found) throw new Error("invalid ID")
    res.status(200).json(found);
})


export const getByIdAndInfo = asyncHandler (async(req, res) => {
    const { id } = req.params;
    const { info } = req.params;
    const found = parsed.find(element => element.id == id);
    if (info == "name") {
        res.status(200).json(found.name);
    } else if (info == "type") {
        res.status(200).json(found.type);
    } else if (info == "base") {
        res.status(200).json(found.base)
    } else {
        throw new Error('invalid path')
    }
})
