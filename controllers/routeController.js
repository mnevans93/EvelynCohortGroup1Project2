const express = require('express')
const router = express.Router()

const DatabaseController = require('./databaseController')
const apiController = require('./apiController')

const models = [
    {name: 'accommodation', path: require('../models/accommodation')},
    {name: 'benefit', path: require('../models/benefit')},
    {name: 'employer', path: require('../models/employer')},
    {name: 'employmenttype', path: require('../models/employmentType')},
    {name: 'entity', path: require('../models/entity')},
    {name: 'jobposting', path: require('../models/jobPosting')},
    {name: 'location', path: require('../models/location')},
    {name: 'lvlofexp', path: require('../models/LvlOfExp')},
    {name: 'salary', path: require('../models/salary')},
]

const generateRoutes = (router, models, apiController) => {
    models.forEach(model => {
        const databaseController = new DatabaseController(model.path)
        console.log(databaseController)
        //Index
        router.get(`/api/${model.name}`, databaseController.index, apiController.indexEntity)
        //Delete
        router.delete(`/api/${model.name}/:id`, databaseController.delete, apiController.showEntity)
        //Update
        router.put(`/api/${model.name}/:id`, databaseController.update, apiController.showEntity)
        //Create
        router.post(`/api/${model.name}`, databaseController.create, apiController.showEntity)
        //Show
        router.get(`/api/${model.name}/:id`, databaseController.show, apiController.showEntity)
    })
}

generateRoutes(router, models, apiController)

module.exports = router
