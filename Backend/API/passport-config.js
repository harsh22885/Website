const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
User = require('../database/loginm')

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, pass_val, done) => {
    const user = getUserByEmail(email)
    console.log(user)
    console.log(getUserByEmail)
    console.log(user.email)
    console.log(email)
    

    try {
      if (user.email !== email) {
        return done(null, false, { message: 'No user with that email' })
      }
      if (await bcrypt.compare(pass_val, user.password)) {
        console.log(user.password)
        console.log(pass_val)
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'uname_val' , passwordField: 'pass_val'}, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  })
}

module.exports = initialize