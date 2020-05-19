const mongoose = require('mongoose');

const URI = "mongodb://guju:admin123123@ds163156.mlab.com:63156/gujukaserver";


const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log('connection !')
  }catch(error) {
    throw(error.message)
  }
};


module.exports = connectDB;


