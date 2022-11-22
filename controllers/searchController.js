const express = require('express')
const router = express.Router()

const models = [
  { name: 'accommodation', path: require('../models/accommodation') },
  { name: 'benefit', path: require('../models/benefit') },
  { name: 'employer', path: require('../models/employer') },
  { name: 'employmenttype', path: require('../models/employmentType') },
  { name: 'entity', path: require('../models/entity') },
  { name: 'jobposting', path: require('../models/jobPosting') },
  { name: 'location', path: require('../models/location') },
  { name: 'lvlOfExp', path: require('../models/lvlOfExp') },
  { name: 'salary', path: require('../models/salary') }
]

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
