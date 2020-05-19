const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./Backend/database/connection')
const forum = require (`./Backend/database/registerm`)
const router = express.Router();
const bodyParser = require('body-parser')
const multer  = require('multer')
const fs = require('fs')


const jsonParser = bodyParser.json()
const urlEncoded = bodyParser.urlencoded()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/register', jsonParser, async (req, res) => {

  const { firstname,
  surname, 
  birthday, 
  nationality ,
  gender,
  age,
  address,
  mobile,
  email,
  disability ,
  intake,
  courses,
  university,
  fund,
  college,
  country,
  title,
  grade ,
  startday , 
  endday,
  test ,
  work,
  company,
  job,
  duties } = req.body;

  console.log(
    firstname  +
    surname +
    birthday+ 
    nationality +
    gender +
    age +
    address +
    mobile +
    email +
    disability +
    intake+
    courses +
    university+
    fund +
    college +
    country +
    title +
    grade +
    startday + 
    endday +
    test +
    work +
    company +
    job +
    duties )

  let user = {};

  user.firstname = firstname;
  user.surname = surname;
  user.birthday = birthday;
  user.nationality = nationality;
  user.gender = gender;
  user.age = age;
  user.address = address;
  user.mobile = mobile;
  user.email =  email;
  user.disability =disability,
  user.intake=intake,
  user.courses = courses,
  user.university=university,
  user.fund=fund,
  user.college = college;
  user.country = country;
  user.title = title;
  user.grade = grade;
  user.startday = startday;
  user.endday = endday;
  user.test = test;
  user.work= work;
  user.company = company;
  user.job = job;
  user.duties = duties;
  

  let userModel = new forum(user);
  await dbConnection()
  await userModel.save();
  res.json(userModel);
  
});

var upload = multer({ dest: 'uploads/' })

router.post('/register', upload.single('file'), (req, res) =>{
  // file 
  // res.send('File sent!')
})

router.get('/file/:fileName', (req, res) => {
  const fileName = req.params.fileName
  try {
      const path = __dirname + `/uploads/${fileName}`
      const file = fs.readFileSync(path)
      res.contentType("application/pdf");
      res.send(file)
  }catch(e) { 
      console.log(e)
      res.send('error Reading file') 
  }
})



module.exports = router;