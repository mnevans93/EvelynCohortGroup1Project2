const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lvlOfExpSchema = new Schema(
  {
    type: String,
    enum: ["Internship", "Entry Level", "Mid-Level", "Executive Level", "Senior Leadership"],
    required: true,
  }
)

const lvlOfExp = model("lvl of exp", lvlOfExpSchema)

module.exports = lvlOfExp