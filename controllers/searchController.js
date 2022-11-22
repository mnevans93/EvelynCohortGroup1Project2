const express = require('express')
const router = express.Router()

const models = require('../models/modelsArray')

const searchRoute = (models, router) => {
  models.forEach(i => {
    router.get(`/${i.name}/:id`, (req, res) => {
      // assume there is a filter and a value on req.query or theres an error
      if (req.query.filter && req.query.value && req.query.model) {
        models[req.query.model].where(req.query.filter).equals(req.query.value).exec((err, results) => {
          if (err) {
            res.status(400).json({ msg: err })
          } else {
            res.json(results)
          }
        })
      } else {
        (
          res.status(400).json({ msg: 'malformed query, must have filter and value' })
        )
      }
    })
  })
  return router
}

searchRoute(models, router)

module.exports = router
