if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// error and combine
const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./Backend/database/connection')
const User = require('./Backend/database/loginm')
const router = express.Router();
const bodyParser = require('body-parser')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const passport = require('passport')
const bcrypt = require('bcrypt')

const jsonParser = bodyParser.json()
const urlEncoded = bodyParser.urlencoded()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const users =[]

const initializePassport = require('./Backend/API/passport-config')

initializePassport(
passport,
email => users.find(user => user.email === email),
id => users.find(user => user.id === id)
)

//   router.get('/find_user', jsonParser, async (req, res) => {
//   await dbConnection()
//   const users = await User.find({uname_val: "Harsh"})
//   res.send(`<marquee> LastName is  ${users[0].pass_val} </marquee>`);
//   });

// router.get('/find_user', jsonParser, async (req, res) => {
//   await dbConnection()
//   const users = await User.find({})
//   const cursor = User.findOne({
//     email:"harsh22885@gmail.com"
//   });
//   //  res.send( `LastName is  ${users[1].id} ` );
//    res.send( cursor);
// });

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


router.get('/hello', checkAuthenticated, (req, res) => {
  res.render('hello.ejs', { name: req.user.name })
})

router.get('/signup', checkNotAuthenticated, (req, res) => {
  res.render('signup.ejs')
})
router.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/hello',
  failureRedirect: '/login',
  failureFlash: true
  }))

router.post('/signup', jsonParser ,checkNotAuthenticated, async (req, res) => {

try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({

        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
       
        
      })
//       const { name ,email } = req.body;
//       console.log(name + " " + email + " " + hashedPassword)
//       let user = {};
//       user.name = name;
//       user.email = email;
//       user. password = hashedPassword ;
//       let userModel = new User(user);
//       await dbConnection()
//       await userModel.save();
//       res.json(userModel);
       res.redirect('./login')
 } catch {
  res.redirect('./signup')
}    

     console.log(users)
    
});

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