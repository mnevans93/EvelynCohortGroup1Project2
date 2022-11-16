const apiController = {
    indexEmployer (req, res, next) {
      res.json(res.locals.data.Employer)
    },
    showEmployer (req, res, next) {
      res.json(res.locals.data.Employer)
    },
    indexJobPosting (req, res, next) {
        res.json(res.locals.data.JobPosting)
      },
      showJobPosting (req, res, next) {
        res.json(res.locals.data.JobPosting)
      },
      indexAccommodation (req, res, next) {
        res.json(res.locals.data.Accommodation)
      },
      showAccommodation (req, res, next) {
        res.json(res.locals.data.Accommodation)
      },
      indexSalary (req, res, next) {
        res.json(res.locals.data.Salary)
      },
      showSalary (req, res, next) {
        res.json(res.locals.data.Salary)
      },
      indexLocation (req, res, next) {
        res.json(res.locals.data.Location)
      },
      showLocation (req, res, next) {
        res.json(res.locals.data.Location)
      },
      indexEntity (req, res, next) {
        res.json(res.locals.data.Entity)
      },
      showEntity (req, res, next) {
        res.json(res.locals.data.Entity)
      },
      indexEmploymentType (req, res, next) {
        res.json(res.locals.data.EmploymentType)
      },
      showEmploymentType (req, res, next) {
        res.json(res.locals.data.EmploymentType)
      },
      indexLevelOfExperience (req, res, next) {
        res.json(res.locals.data.LevelOfExperience)
      },
      showLevelOfExperience (req, res, next) {
        res.json(res.locals.data.LevelOfExperience)
      },
      indexBenefit (req, res, next) {
        res.json(res.locals.data.Benefit)
      },
      showBenefit (req, res, next) {
        res.json(res.locals.data.Benefit)
      },
      indexSearch (req, res, next) {
        res.json(res.locals.data.Search)
      },
      showSearch (req, res, next) {
        res.json(res.locals.data.Search)
      },
  } 
  
  
  module.exports = apiController
  