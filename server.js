const express = require('express')
const search = require('./models/search')
const PORT = process.env.PORT || 3000


const app = express();






app.use('/', (req, res, next) => {
    const filters = req.query;
    const filteredSearch = search.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredSearch);
});




app.listen(PORT, () => {
    console.log('Listening on port 3000')
})