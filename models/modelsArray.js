const models = [
  { name: 'accommodation', path: require('../models/accommodation') },
  { name: 'benefit', path: require('../models/benefit') },
  { name: 'employer', path: require('../models/employer'), params: 'jobPostings' },
  { name: 'employmenttype', path: require('../models/employmentType') },
  { name: 'entity', path: require('../models/entity') },
  { name: 'jobposting', path: require('../models/jobPosting'), params: 'accommodation benefit lvlOfExp entity employmentType salary location' },
  { name: 'location', path: require('../models/location') },
  { name: 'lvlOfExp', path: require('../models/lvlOfExp') },
  { name: 'salary', path: require('../models/salary') }
]

module.exports = models
