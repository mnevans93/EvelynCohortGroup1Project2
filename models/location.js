const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const locationSchema = new Schema ({
  City: { type: String, required: true },
  State: { type: String, required: true },
  TypeOfWork: [{
    type: Array,
    enum: ['Remote', 'On-site', 'Hybrid']
  }]
})

const Location = model('Location', locationSchema)

module.exports = Location