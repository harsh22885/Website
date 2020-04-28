const express = require('express')
const mongoose = require('mongoose')
const dbConnection = require('../database/connection')
const User = require('../database/loginm')
const router = express.Router()
const bodyParser = require('body-parser')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const passport = require('passport')
const bcrypt = require('bcrypt')

const jsonParser = bodyParser.json()
const urlEncoded = bodyParser.urlencoded()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/login.html', jsonParser, async (req, res) => {

  const { uname_val, pass_val } = req.body;
  console.log(uname_val + " " + pass_val)
  let user = {};
  user.uname_val = uname_val;
  user.pass_val = pass_val;
  let userModel = new User(user);
  await dbConnection()
  await userModel.save();
  res.json(userModel);

  
});

//   router.get('/find_user', jsonParser, async (req, res) => {
//   await dbConnection()
//   const users = await User.find({uname_val: "Harsh"})
//   res.send(`<marquee> LastName is  ${users[0].pass_val} </marquee>`);
//   });

module.exports = router;