const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const jobPostingSchema = new Schema(
  {
    PositionTitle: { type: String, required: true },
    JobDescription: { type: String, required: true },
    Location: {
      type: Schema.Types.ObjectID,
      ref: 'Location'
    },
    Salary: {
      type: Schema.Types.ObjectID,
      ref: 'Salary'
    },
    EmploymentType: {
      type: Schema.Types.ObjectID,
      ref: 'EmploymentType'
    },
    Entity: {
      type: Schema.Types.ObjectID,
      ref: 'Entity'
    },
    // Level of Experience
    LvlOfExp: {
      type: Schema.Types.ObjectID,
      ref: 'LvlOfExp'
    },
    Benefit: {
      type: Schema.Types.ObjectID,
      ref: 'Benefit'
    },
    Accommodation: {
      type: Schema.Types.ObjectID,
      ref: 'Accommodation'
    }
  }
)

const JobPosting = model('JobPosting', jobPostingSchema)

module.exports = JobPosting
