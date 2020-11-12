const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy(
    {
    clientID : keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback '
    },
    (accessToken, refreshToken, profile, done)=>{
      console.log('accessToken'); 
      console.log(accessToken); 
      console.log('done ' + done); 
      console.log('profile'); 
      console.log(profile); 
      console.log('refreshToken'); 
      console.log(refreshToken); 
    }
));
