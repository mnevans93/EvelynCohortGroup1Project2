class APIController {
  constructor (model) {
    this.model = model
  }

  index (req, res, next) {
    res.json(res.locals.data.documents)
  }

  show (req, res, next) {
    res.json(res.locals.data.document)
  }
}

module.exports = APIController
