const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const lvlOfExpSchema = new Schema({
  levelOfExperience:
  {
    type: Array,
    items: {
      type: String,
      enum: ['Internship', 'Entry Level', 'Mid-Level', 'Executive Level', 'Senior Leadership']
    },
    required: true
  }
})

const LvlOfExp = model('LvlOfExp', lvlOfExpSchema)

module.exports = LvlOfExp
