const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salarySchema = new Schema ({
  Minimum: { type: Number, required: true },
  Maximum: { type: Number, required: true },
  Rate: [{
    type: Array,
    enum: ['Annually', 'Hourly']
  }]
})

const Salary = model('salary', salarySchema)

module.exports = Salary