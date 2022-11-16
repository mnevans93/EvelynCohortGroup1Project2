const mongoose = require('mongoose')

// Make a Schema
const entitySchema = new mongoose.Schema({
  BIPOCLedOrg: Boolean,
  LGBTQIAFriendly: Boolean
})

// Make a Model for the Schema
const Entity = mongoose.model('entity', entitySchema)

// Export
module.exports = Entity
