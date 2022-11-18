const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const jobPostingSchema = new Schema(
  {
    PositionTitle: { type: String, required: true },
    JobDesciption: { type: String, required: true },
    Location: [{
      type: Schema.Types.ObjectID,
      ref: 'Location'
    }],
    Salary: [{
      type: Schema.Types.ObjectID,
      ref: 'Salary'
    }],
    EmploymentType: [{
      type: Schema.Types.ObjectID,
      ref: 'EmploymentType'
    }],
    WorkplaceTags: [{
      type: Schema.Types.ObjectID,
      ref: 'workplace tags'
    }],
    // Level of Experience
    LvlOfExp: [{
      type: Schema.Types.ObjectID,
      ref: 'LvlOfExp'
    }],
    Benefits: [{
      type: Schema.Types.ObjectID,
      ref: 'Benefits'
    }],
    Accommodation: [{
      type: Schema.Types.ObjectID,
      ref: 'Accommodation'
    }]
  }
)

const JobPosting = model('JobPosting', jobPostingSchema)

module.exports = JobPosting
