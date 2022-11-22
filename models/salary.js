const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const salarySchema = new Schema({
  minimum: { type: Number, required: true },
  maximum: { type: Number, required: true },
  rate: [{
    type: Array,
    enum: ['Annually', 'Hourly'],
    required: true
  }]
})

const Salary = model('Salary', salarySchema)

module.exports = Salary
