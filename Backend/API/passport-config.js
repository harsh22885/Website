const passport = require("passport");
const localStrategy = require('passport-local').Strategy
const User = require('../database/loginm')
const bcrypt = require('bcrypt')
 
passport.serializeUser(function (user, done) {
  done(null, user);
})
 
passport.deserializeUser(function (user, done) {
  done(null, user);
});
 
passport.use(
  new localStrategy(async function (email, password, done) {
    try{
      const user = await User.findOne({ email });
      if( user == null) {
        return done(null, false, { message: 'No user with that email' })
      }
      const comparedPassword = await bcrypt.compare(password, user.password)
      if(comparedPassword) {
        return done(null, user)
      }else{
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch(error) {
      done(null, false)
    }
  })
);

module.exports = passport
