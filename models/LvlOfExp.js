const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lvlOfExpSchema = new Schema({
  LevelOfExperience: 
  {
    type: Array,
    enum: ['Internship', 'Entry Level', 'Mid-Level', 'Executive Level', 'Senior Leadership'],
    required: true,
  }
})

const lvlOfExp = model("LvlOfExp", lvlOfExpSchema)

module.exports = lvlOfExp