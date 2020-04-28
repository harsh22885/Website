const mongoose = require('mongoose');

const URI = "mongodb+srv://HPDB:HPDB@cluster0-6eobd.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  console.log(URI)
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


