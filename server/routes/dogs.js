const express = require('express')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const Dog = require('../models/Dog')
const User = require('../models/User')
const router = express.Router()
const axios = require('axios')
const Breed = require('../models/Breed')
const { isLoggedIn } = require('../middlewares')
const breeds = require('../bin/breeds')

// Route to get dogs from API

// router.get('/', (req, res, next) => {
//   axios.post('https://api.petfinder.com/v2/oauth2/token', { grant_type: 'client_credentials', client_id: process.env.API_KEY, client_secret: process.env.API_SECRET })
//     .then(token => {
//       //axios.get('https://api.petfinder.com/v2/types/dog/breeds')
//       //axios.get('https://api.petfinder.com/v2/animals?type=dog') 
//       axios.get('https://api.petfinder.com/v2/animals?type=dog',
//         { headers: { Authorization: `Bearer ${token.data.access_token}` } })
//         .then(animals => {
//           res.json(animals.data);

//         }).catch(err => console.error(err))
//     })

//     .catch(err => console.error(err))

// })




// const getPreferences = (req) => {
//   User.findById(req.user._id)
//     .then((user) => {
//       console.log(user);
//     }).catch(err => console.error(err))
// }



// router.get('/', (req, res, next) => { 

//   console.log(req);

//   axios.post('https://api.petfinder.com/v2/oauth2/token', { grant_type: 'client_credentials', client_id: process.env.API_KEY, client_secret: process.env.API_SECRET })
//     .then(token => {

//       axios.get('https://api.petfinder.com/v2/animals?type=dog', { headers: { Authorization: `Bearer ${token.data.access_token}` } })
//         .then(animals => {
//           // getPreferences(req);


//           res.json(animals.data);
//         }).catch(err => console.error(err))
//     })
//     .catch(err => console.error(err))
// })




router.get('/', isLoggedIn, async (req, res, next) => {


  let token = await axios.post('https://api.petfinder.com/v2/oauth2/token', { grant_type: 'client_credentials', client_id: process.env.API_KEY, client_secret: process.env.API_SECRET }).catch(err => console.error(err))

  let animal = 'dog'


  let user = await User.findById(req.user._id).catch(err => console.error(err))


  // console.log(user, '-=-=-?-=-=-', breeds)
  //let data = animals.data
  // data.user = user
  // data.breeds = breeds


  console.log(user);

  let { location, children, otherPets, age, size, active, affection, watchful, heat } = user.preferences;
  console.log(location);

  //NEED TO FIX LOCATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let filteredAPIcall = `https://api.petfinder.com/v2/animals?type=${animal}&size=${size}&age=${age}&location=33028`

  if (children) {
    filteredAPIcall = filteredAPIcall + `&good_with_children=${children}`
  }

  if (otherPets === 'both') {
    filteredAPIcall = filteredAPIcall + `&good_with_cats=true&good_with_dogs=true`
  }
  else if (otherPets === 'dogs') {
    filteredAPIcall = filteredAPIcall + `&good_with_dogs=true`
  }
  else if (otherPets === 'cats') {
    filteredAPIcall = filteredAPIcall + `&good_with_cats=true`
  }

  let dogs = await axios.get(filteredAPIcall, { headers: { Authorization: `Bearer ${token.data.access_token}` } }).catch(err => console.error(err))





  console.log('animals ============', dogs.data.animals[0].breeds.primary);


  dogs.data.animals.map((eachDog) => {

    let mainBreed = eachDog.breeds.primary;

    for (let i = 0; i < breeds.length; i++) {

      if (mainBreed == breeds[i].name) {
        let total = getComparison(breed[i]);

      } 
      else {

      }

    }

  })




  getComparison = (breedInfo) => {


    let total = {
      totalEnergy: breedInfo.energy - user.preferences.energy,
      totalExercise: breedInfo.exercise - user.preferences.exercise,
      totalAffection: breedInfo.affection - user.preferences.affection,
      totalWatchful: breedInfo.watchfulness - user.preferences.watchful,
      totalHeat: breedInfo.heatSensitivity - user.preferences.heat,
      Score: total.totalEnergy + total.totalExercise + total.totalAffection + total.totalWatchful + total.totalHeat
    }

    // let totalScore = total.totalEnergy + total.totalExercise + total.totalAffection + total.totalWatchful + total.totalHeat;


    return total;
  }

















  res.json(dogs.data);

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
