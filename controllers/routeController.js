const express = require('express')
const router = express.Router()

const DatabaseController = require('./databaseController')
const APIController = require('./apiController')

const models = [
  { name: 'accommodation', path: require('../models/accommodation')},
  { name: 'benefit', path: require('../models/benefit')},
  { name: 'employer', path: require('../models/employer'), params : "jobPostings" },
  { name: 'employmenttype', path: require('../models/employmentType')},
  { name: 'entity', path: require('../models/entity')},
  { name: 'jobposting', path: require('../models/jobPosting'), params : "Accommodation Benefit LvlOfExp Entity EmploymentType Salary Location" },
  { name: 'location', path: require('../models/location')},
  { name: 'lvlOfExp', path: require('../models/lvlOfExp')},
  { name: 'salary', path: require('../models/salary')}
]

const generateRoutes = (router, models) => {
  models.forEach(model => {
    const databaseController = new DatabaseController(model.path, model.params)
    const apiController = new APIController(model.path)
    // Index
    router.get(`/api/${model.name}`, databaseController.index.bind(databaseController), apiController.index.bind(apiController))
    // Delete
    router.delete(`/api/${model.name}/:id`, databaseController.delete.bind(databaseController), apiController.show.bind(apiController))
    // Update
    router.put(`/api/${model.name}/:id`, databaseController.update.bind(databaseController), apiController.show.bind(apiController))
    // Create
    router.post(`/api/${model.name}`, databaseController.create.bind(databaseController), apiController.show.bind(apiController))
    // Show
    router.get(`/api/${model.name}/:id`, databaseController.show.bind(databaseController), apiController.show.bind(apiController))
  })
}

generateRoutes(router, models)

module.exports = router
