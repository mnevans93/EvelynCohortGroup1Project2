const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobPostingSchema = new Schema(
  {
    PositionTitle: { type: String, required: true },
    JobDesciption: { type: String, required: true },
    Location: [{
      type: Schema.Types.ObjectID,
      ref: "location"
    }],
    Salary: [{
      type: Schema.Types.ObjectID,
      ref: "salary"
    }],
    EmploymentType: [{
      type: Schema.Types.ObjectID,
      ref: "employment type"
    }],
    WorkplaceTags: [{
      type: Schema.Types.ObjectID,
      ref: "workplace tags"
    }],
    // Level of Experience
    LvlOfExp: [{
      type: Schema.Types.ObjectID,
      ref: "lvl of exp"
    }],
    Benefits: [{
      type: Schema.Types.ObjectID,
      ref: "benefits"
    }],
    Accommodations: [{
      type: Schema.Types.ObjectID,
      ref: "accommodations"
    }],
  }
)

const Job_Posting = model("Job_postings", jobPostingSchema)

module.exports = Job_Posting