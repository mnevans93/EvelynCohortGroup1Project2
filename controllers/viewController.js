const ROUTE_PATH = '/jobPosting'
const FILE_PATH = 'jobPostings'

const viewController = {
  index (req, res, next) {
    res.render(`${FILE_PATH}/Index`, res.locals.data)
  },
  newView (req, res, next) {
    res.render(`${FILE_PATH}/New`)
  },
  edit (req, res, next) {
    res.render(`${FILE_PATH}/Edit`, res.locals.data)
  },
  show (req, res, next) {
    res.render(`${FILE_PATH}/Show`, res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
  }

}

module.exports = viewController
