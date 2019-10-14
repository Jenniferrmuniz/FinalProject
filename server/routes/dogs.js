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


  //let breedScores;
  let token = await axios.post('https://api.petfinder.com/v2/oauth2/token', { grant_type: 'client_credentials', client_id: process.env.API_KEY, client_secret: process.env.API_SECRET }).catch(err => console.error(err))

  let user = await User.findById(req.user._id).catch(err => console.error(err))

  let { location, children, otherPets, age, size, active, affection, watchful, heat } = user.preferences;

  let animal = 'dog'
  //NEED TO FIX LOCATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let filteredAPIcall = `https://api.petfinder.com/v2/animals?type=${animal}&status=adoptable&size=${size}&age=${age}&location=33028&limit=100`

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


  let breedMatches = [];
  let breedMatch;
  for (let i = 0; i < breeds.length; i++) {
    breedMatch = getComparison(breeds[i]);
    breedMatches.push(breedMatch);
  }
  breedMatches.sort((a, b) => {
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  });
  //breedScores = breedMatches
  let filtered = sortAnimals();




  function sortAnimals() {

    let filteredDogs = [];

    for (let i = 0; i < breedMatches.length; i++) {
      for (let j = 0; j < dogs.data.animals.length; j++) {
        if (breedMatches[i].name === dogs.data.animals[j].breeds.primary) {
          let matchingPup = dogs.data.animals[j];
          matchingPup.total = breedMatches[i];
          filteredDogs.push(matchingPup);
        }
      }
    }
    return filteredDogs;
  }



  function getComparison(breedInfo) {

    let totalActive = Math.abs((breedInfo.exercise + breedInfo.energy) - Number(user.preferences.active));
    let totalAffection = Math.abs(Number(breedInfo.affection) - Number(user.preferences.affection));
    let totalWatchful = Math.abs(Number(breedInfo.watchfulness) - Number(user.preferences.watchful));
    let totalHeat = Math.abs(Number(breedInfo.heatSensitivity) - Number(user.preferences.heat));


    let total = {
      name: breedInfo.name,
      totalActive,
      totalAffection,
      totalWatchful,
      totalHeat,
      score: totalActive + totalAffection + totalWatchful + totalHeat
    }

    return total;
  }

  console.log(filtered);

  res.json({ filtered, somethin: 'else' });

})





router.get('/send-email', (req, res, next) => {

})






//Breeds
router.get('/breeds', (req, res, next) => {

  // Breed.create({
  //   name: "Bullmastiff",
  //   energy: 1,
  //   exercise: 2,
  //   affection: 3,
  //   watchfulness: 5,
  //   heatSensitivity: 5
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
