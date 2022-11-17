const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employmentTypeSchema = new Schema ({
  employmentType: {
  type: Array,
  enum: ['Full-Time', 'Part-Time', 'Contract', 'Temporary']
  }
})

const EmploymentType = model('EmploymentType', employmentTypeSchema)

module.exports = EmploymentType