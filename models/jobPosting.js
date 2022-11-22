const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobPostingSchema = new Schema(
  {
    positionTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    location: {
      type: Schema.Types.ObjectID,
      ref: 'Location'
    },
    salary: {
      type: Schema.Types.ObjectID,
      ref: 'Salary'
    },
    employmentType: {
      type: Schema.Types.ObjectID,
      ref: 'EmploymentType'
    },
    entity: {
      type: Schema.Types.ObjectID,
      ref: 'Entity'
    },
    // Level of Experience
    lvlOfExp: {
      type: Schema.Types.ObjectID,
      ref: 'LvlOfExp'
    },
    benefit: {
      type: Schema.Types.ObjectID,
      ref: 'Benefit'
    },
    accommodation: {
      type: Schema.Types.ObjectID,
      ref: 'Accommodation'
    }
  }
)

const JobPosting = model('JobPosting', jobPostingSchema)

module.exports = JobPosting
