require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const database = require('./models/database')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
database.once('open', () => {
  console.log('Connected to MongoDB Atlas')
})

app.use(methodOverride('_method'))
app.use(express.static('public'))

app.use('/invisiblestrengths', require('./controllers/routeController'))

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
