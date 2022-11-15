const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employTypeSchema = new Schema ({
  type: String,
  enum: ['Full-Time', 'Part-Time', 'Contract', 'Temporary']
})

const EmployType = model('employmentType', employTypeSchema)

module.exports = EmployType