const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const employmentTypeSchema = new Schema ({
  employmentType: {
  type: Array, items: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Contract', 'Temporary']
  }
  }
})

const EmploymentType = model('EmploymentType', employmentTypeSchema)

module.exports = EmploymentType