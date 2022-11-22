const express = require('express')
const router = express.Router()

const DatabaseController = require('./databaseController')
const APIController = require('./apiController')
const models = require('../models/modelsArray')

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
