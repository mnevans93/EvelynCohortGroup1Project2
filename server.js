require('dotenv').config()
// Require modules

const express = require('express') 
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3030


// Configure the app (app.set)
/* START Config */


app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

/* END Config */

/* START Middleware */

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine

app.use(methodOverride('_method')) // Allows override method
app.use(express.static('public'))


/* END Middleware */

/* PORT */
// Tell the app to listen on a port
app.listen(PORT, () => {
  console.log('Listening on Port 3000', PORT)
})