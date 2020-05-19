if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// error and combine
const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./Backend/database/connection')
const User = require('./Backend/database/loginm')
const forum = require (`./Backend/database/registerm`)
const router = express.Router();
const bodyParser = require('body-parser')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const bcrypt = require('bcrypt')

const jsonParser = bodyParser.json()
const urlEncoded = bodyParser.urlencoded()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const passport = require('./Backend/API/passport-config')

router.use(express.urlencoded({ extended: false }))
router.use(flash())
router.use(session({

  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false

}))
router.use(passport.initialize())
router.use(passport.session())
router.use(methodOverride('_method'))

router.get('/hello', checkAuthenticated , jsonParser, async (req, res) => {

  try{

    const email = req.session.passport.user.email
    const users = await User.findOne({ email })
    const name = users.name
    res.render('uni.ejs', { name: name })

  } catch(error) {
    
    res.status(400).send('ERROR')
  }
})

router.get('/signup', checkNotAuthenticated,(req, res) => {
  res.render('signup.ejs')
})

router.get('/login',checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

router.post('/login', checkNotAuthenticated, passport.authenticate('local',  {

  successRedirect: '/hello',
  failureRedirect: '/login',
  failureFlash: true
  
}))

router.post('/signup', jsonParser,checkNotAuthenticated, async (req, res) => {

try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const { name , email } = req.body;
      console.log(name + " " + email + " " + hashedPassword)
      let user = {};
      user.name = name;
      user.email = email;
      user. password = hashedPassword ;
      let userModel = new User(user);
      await dbConnection()
      await userModel.save();
      res.redirect('/login')

 } catch {
    res.redirect('./signup')
  }
});


router.get('/getUsers', async (req, res) => {
  const forums = await forum.find({})
  const users = await User.find({})
  res.send(users)

})


router.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/hello')
  }
  next()
}


module.exports = router;