const mongoose = require('mongoose')

const accommadationSchema = new mongoose. Schema({
    word: { type: String, required: true },
});

const Accomodation = mongoose.model('Accommodation', accommadationSchema)

module.exports = Accomodation