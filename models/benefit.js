const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const benefitSchema = new Schema({
    _401K: {type: Boolean, required: true },
    healthInsurance: { type: Boolean, required: true},
    vision: { type: Boolean, required: true },
    dental: { type: Boolean, required: true },
    maternal: { type: Boolean, required: true },
    other: { type: String}
});

const Benefit = model('Benefit', benefitSchema)

module.exports = Benefit
