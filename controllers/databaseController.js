class DatabaseController {
    constructor(model) {
        this.model = model
    }

    errorCheck = (err) => {
        if (err) {
            res.status(400).send({msg: err.message})
            return true
        } else {return false}
    }

    index (req, res, next) {
        this.model.find({}, (err, foundDocuments) => {
            if (this.errorCheck(err) === false) {
                res.locals.data.documents = foundDocuments
                next()
            }
        })
    }

    delete (req, res, next) {
        this.model.findByIDAndDelete(req.params.id, (err, deletedDocument) => {
            if (this.errorCheck(err) === false) {
                res.locals.data.document = deletedDocument
                next()
            }
        })
    }

    update (req, res, next) {
        this.model.findByIDAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDocument) => {
            if (this.errorCheck(err) === false) {
                res.locals.data.document = updatedDocument
                next()
            }
        })
    }

    create (req, res, next) {
        this.model.create(req.body, (err, createdDocument) => {
            if (this.errorCheck(err) === false) {
                res.locals.data.document = createdDocument
                next()
            }
        })
    }

    show (req, res, next) {
        this.model.findByID(req.params.id, (err, foundDocument) => {
            if (this.errorCheck(err) === false) {
                res.locals.data.document = foundDocument
                next()
            }
        })
    }

}

module.exports = DatabaseController
