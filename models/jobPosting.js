const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobPostingSchema = new Schema(
  {
    PositionTitle: { type: String, required: true },
    JobDesciption: { type: String, required: true },
    Location: [{
      type: Schema.Types.ObjectID,
      ref: "Location"
    }],
    Salary: [{
      type: Schema.Types.ObjectID,
      ref: 'Salary'
    }],
    EmploymentType: [{
      type: Schema.Types.ObjectID,
      ref: 'EmploymentType'
    }],
    //entity.js
    WorkplaceTags: [{
      type: Schema.Types.ObjectID,
      ref: "Entity"
    }],
    // Level of Experience
    LvlOfExp: [{
      type: Schema.Types.ObjectID,
      ref: "LvlOfExp"
    }],
    Benefits: [{
      type: Schema.Types.ObjectID,
      ref: "Benefits"
    }],
    Accommodation: [{
      type: Schema.Types.ObjectID,
      ref: "Accommodation"
    }],
  }
)

const JobPosting = mongoose.model("Job_postings", jobPostingSchema)

module.exports = JobPosting