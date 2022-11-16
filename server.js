const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.Employer)
    },
    show (req, res, next) {
      res.json(res.locals.data.Employer)
    },
    index (req, res, next) {
        res.json(res.locals.data.JobPosting)
      },
      show (req, res, next) {
        res.json(res.locals.data.JobPosting)
      },
      index (req, res, next) {
        res.json(res.locals.data.Accommodation)
      },
      show (req, res, next) {
        res.json(res.locals.data.Accommodation)
      },
      index (req, res, next) {
        res.json(res.locals.data.Salary)
      },
      show (req, res, next) {
        res.json(res.locals.data.Salary)
      },
      index (req, res, next) {
        res.json(res.locals.data.Location)
      },
      show (req, res, next) {
        res.json(res.locals.data.Location)
      },
      index (req, res, next) {
        res.json(res.locals.data.Entity)
      },
      show (req, res, next) {
        res.json(res.locals.data.Entity)
      },
      index (req, res, next) {
        res.json(res.locals.data.EmploymentType)
      },
      show (req, res, next) {
        res.json(res.locals.data.EmploymentType)
      },
      index (req, res, next) {
        res.json(res.locals.data.LevelOfExperience)
      },
      show (req, res, next) {
        res.json(res.locals.data.LevelOfExperience)
      },
      index (req, res, next) {
        res.json(res.locals.data.Benefit)
      },
      show (req, res, next) {
        res.json(res.locals.data.Benefit)
      },
      index (req, res, next) {
        res.json(res.locals.data.Search)
      },
      show (req, res, next) {
        res.json(res.locals.data.Search)
      },
  } 
  
  
  module.exports = apiController
  