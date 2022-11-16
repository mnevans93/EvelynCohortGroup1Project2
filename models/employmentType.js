const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employTypeSchema = new Schema ({
  employmentType: {
  type: Array,
  enum: ['Full-Time', 'Part-Time', 'Contract', 'Temporary']
  }
})

const Employment_Type = model('employmentType', employTypeSchema)

module.exports = Employment_Type