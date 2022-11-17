const mongoose = require('mongoose')

const benefitsSchema = new mongoose.Schema({
    _401K: {type: Boolean, required: true },
    healthInsurance: { type: Boolean, required: true},
    vision: { type: Boolean, required: true },
    dental: { type: Boolean, required: true },
    maternal: { type: Boolean, required: true },
    other: { type: String}
});

const Benefits = mongoose.model('Benefits', benefitsSchema)

module.exports = Benefits