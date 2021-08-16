import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const pokeSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: Object, required: true },
    type: { type: Array, required: true },
    author: { type: Object, required: true },

});

const Pokemon = model('Pokemon', pokeSchema);

export default Pokemon;

