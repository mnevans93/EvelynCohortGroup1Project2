const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const employerSchema = new Schema(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true,
      minLength: 5,
      maxLength: 15,
    },
    password: { 
      type: String, 
      required: true,
      minLength: 8,
      maxLength: 20,
    },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true },
    jobPostings: [{
      type: Schema.Types.ObjectID,
      ref: "Job_postings"
    }]
  }
)

const Employer = model("Employer", employerSchema)

module.exports = Employer



