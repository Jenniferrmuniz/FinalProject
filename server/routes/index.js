const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const User = require('../models/User')



router.get('/user', (req, res, next) => {

  if (req.user) {
    // console.log('=-=-=-=-= the user is logged in', req.user)
  } else {
    // console.log('[][][][][][] the user is not logged in', req.user)
  }
  res.json(req.user)
})

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})



//Post the form to save quiz 
router.post('/savequiz', isLoggedIn, (req, res, next) => {
  console.log(req.body)
  User.findById(req.user._id)
    .then((user) => {
      user.preferences = req.body
      user.save((err, doc) => {
        res.json({ saved: doc })
      })
    }).catch(err => console.error(err))
})

module.exports = router
