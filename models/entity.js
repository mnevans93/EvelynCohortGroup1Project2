const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const entitySchema = new Schema({
  BIPOCLedOrg: {type: Boolean, required: true},
  LGBTQIAFriendly: {type: Boolean, required: true}
})

const Entity = model('Entity', entitySchema)

module.exports = Entity
