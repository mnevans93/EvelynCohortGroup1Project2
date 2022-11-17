const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

// Make a Schema
const entitySchema = new Schema({
  BIPOCLedOrg: Boolean,
  LGBTQIAFriendly: Boolean
})

// Make a Model for the Schema
const Entity = model('Entity', entitySchema)

// Export
module.exports = Entity
