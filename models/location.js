const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema ({
  City: { type: Number, required: true },
  State: { type: Number, required: true },
  TypeOfWork: [{
    type: Array,
    enum: ['Remote'] ['On-site'] ['Hybrid']
  }]
})

const Location = model('location', locationSchema)

module.exports = Location