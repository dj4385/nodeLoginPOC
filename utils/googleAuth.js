const passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth2'),
      configFile = require('../config/configFile')

      console.log("ID",configFile.googleClientSecret, configFile.googleClientID)
//it is used to store the token in cookie
passport.serializeUser((user,done)=>{
    var error = null;
    done(error, user)
})

//it is use to read the token from the cookie
passport.deserializeUser((userId,done)=>{
    console.log("user token id",userId);
})

passport.use(new GoogleStrategy({
    callbackURL: "http://localhost:4200/dashboard",
    clientID : configFile.googleClientID,
    clientSecret : configFile.googleClientSecret
}),(profile,token,refreshToken,done)=>{
    console.log("Function work")
    done(null, profile)
})
