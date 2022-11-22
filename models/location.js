const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const locationSchema = new Schema({
  city: { type: String, required: true },
  state: { type: String, required: true },
  typeOfWork: [{
    type: Array,
    enum: ['Remote', 'On-site', 'Hybrid'],
    required: true
  }]
})

const Location = model('Location', locationSchema)

module.exports = Location
