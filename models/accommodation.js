const mongoose = require('mongoose')

const accommodationSchema = new mongoose.Schema({
    auditory: { type: String, required: true },
    behavioral: { type: String, required: true },
    cognitive: { type: String, required: true },
    speech: { type: String, required: true },
    time: { type: String, required: true },
    vision: { type: String, required: true },
    flexible: { type: String, required: true },
    physical: { type: String, required: true }
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema)

module.exports = Accommodation