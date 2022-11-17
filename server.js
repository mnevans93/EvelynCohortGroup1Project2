const express = require('express')
const { Mongoose } = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express()




app.get('/', function (req, res) {
  res.send(`<h1>Search For Job Postings</h1>
  <form id="form" action="/search/" role="search">
  <input type="search" id="query" name="accomodationsId"
   placeholder="Search..."
   aria-label="Search through site content">
  <button>Search</button>
</form>`)
})

app.get('/search', (req, res) => {
  // assume there is a filter and a value on req.query or theres an error
  if(req.query.filter && req.query.value){
     search.where(req.query.filter).equals(req.query.value).exec((err, results) => {
       if(err){
           res.status(400).json({ msg: err})
        } else {
         res.json(results)
        }
    })
  } else (
   res.status(400).json({ msg: 'malformed query, must have filter and value'})
 )
 })

//only thing we need to search is accomodations. should show up as a list of booleans from the database 

app.use('/search', (req, res, next) => {
    const filters = req.body.accomodationsId
    const filteredSearch = search.filter(user => {
      let isValid = true
      for (key in filters) {
        console.log(key, user[key], filters[key])
        isValid = isValid && user[key] == filters[key]
      }
      return isValid
    })
    res.send(filteredSearch)
})






app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})