const express = require('express')
const Dog = require('../models/Dog')
const router = express.Router()
const axios = require('axios')




// Route to get dogs from API

router.get('/', (req, res, next) => {
  axios.post('https://api.petfinder.com/v2/oauth2/token', { grant_type: 'client_credentials', client_id: 'Bj8lhbrzZBdkzYPlF4CgDEGEVCnKbH4vxDnrldUe3OId9UUwng', client_secret: 'FeG7vRWLmRqWNc8iZbmGlhOcsJ10RKDMCd46zo0c' })
    .then(token => {
      console.log(token.data)
      axios.get('https://api.petfinder.com/v2/animals?type=dog', { headers: { Authorization: `Bearer ${token.data.access_token}` } })
        .then(animals => {

          console.log(animals.data)
          res.json(animals.data)

        }).catch(err => console.error(err))
    })


    .catch(err => console.error(err))


})


// Route to add dogs




module.exports = router
