const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const accommodationSchema = new Schema({
    auditory: { type: Array, required: true },
    behavioral: { type: Array, required: true },
    cognitive: { type: Array, required: true },
    speech: { type: Array, required: true },
    time: { type: Array, required: true },
    vision: { type: Array, required: true },
    flexible: { type: Array, required: true },
    physical: { type: Array, required: true }
});

const Accommodation = model('Accommodation', accommodationSchema)

module.exports = Accommodation