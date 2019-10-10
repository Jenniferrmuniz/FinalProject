const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const Dog = require('../models/Dog')
const User = require('../models/User')
const router = express.Router()
const axios = require('axios')
const Breed = require('../models/Breed')



// Route to get dogs from API

// router.get('/', (req, res, next) => {
//   axios.post('https://api.petfinder.com/v2/oauth2/token', { grant_type: 'client_credentials', client_id: process.env.API_KEY, client_secret: process.env.API_SECRET })
//     .then(token => {
//       //console.log(token.data)
//       //axios.get('https://api.petfinder.com/v2/types/dog/breeds').then(res => console.log(res))
//       // axios.get('https://api.petfinder.com/v2/animals?type=dog', 
//       axios.get('https://api.petfinder.com/v2/animals?type=dog',
//         { headers: { Authorization: `Bearer ${token.data.access_token}` } })
//         .then(animals => {
//           // let breedArray = []
//           // console.log(animals.data)
//           // for (let i = 0; i < animals.data.breeds.length; i++) {
//           //   breedArray.push(animals.data.breeds[i].name)
//           // }
//           // console.log(breedArray)
//           // res.json(breedArray)
//           res.json(animals.data);

//         }).catch(err => console.error(err))
//     })

//     .catch(err => console.error(err))

// })




getPreferences = () => {
  User.findById(req.user._id)
    .then((user) => {

      console.log(user);

    }).catch(err => console.error(err))
}



router.get('/', (req, res, next) => {


  axios.post('https://api.petfinder.com/v2/oauth2/token', { grant_type: 'client_credentials', client_id: process.env.API_KEY, client_secret: process.env.API_SECRET })
    .then(token => {

      axios.get('https://api.petfinder.com/v2/animals?type=dog', { headers: { Authorization: `Bearer ${token.data.access_token}` } })
        .then(animals => {   
          res.json(animals.data);
        }).catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})












// Route to add dogs







//Breeds
router.get('/breeds', (req, res, next) => {




  // Breed.create({
  //   name: "Bullmastiff",
  //   energy: 1,
  //   exercise: 2,
  //   affection: 3,
  //   watchfulness: 5,
  //   heatSensitvity: 5
  // })
  //   .then((response) => {
  //     console.log(response)
  //     res.json(response);
  //   })
  //   .catch((err) => { console.log(err) })


  //res.json(breedsInfo)


})



module.exports = router



// personality: 'anxious',
// breeds: ['poodle', 'lab', 'frenchie']
