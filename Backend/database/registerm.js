const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    firstname: {
      type: String
    },
    surname: {
      type: String
    },
    birthday : {
      type: String
    },
    nationality: {
      type: String
    },
    gender: {
      type: String
    },
    age: {
      type: Number
    },
    address: {
      type: String
    },
    mobile: {
      type: Number
    },
    email: {
      type: String
    },
    disability: {
      type: String
    } ,
    intake: {
    type: String
    },
    courses: {
      type: String
     },
    university: {
      type: String
    },
    fund: {
      type: String
    },  
    college: {
      type: String
    },
    country: {
        type: String
      },
    title: {
        type: String
      },
    grade : {
        type: String
      },
      startday  : {
        type: String
      }, 
      endday : {
        type: String
      },
      test: {
        type: String
      } ,
     work: {
        type: String
      },
     company : {
        type: String
      },
     job : {
        type: String
      },
     duties : {
        type: String
      }
    
  });

const forum = mongoose.model(`forum`, RegisterSchema );
 
module.exports = forum