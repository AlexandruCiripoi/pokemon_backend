import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const statSchema = new Schema({
    winner: { type: String, required: true },
    loser: { type: String,  required: true },
    battleCategory: { type: String,  required: true },
    date: { type: Date, default: Date.now }

});

const Stat = model('Stat', statSchema);

export default Stat;

