const passport = require('passport');

module.exports = (app) => {
    // Passport to attempt authenticate and access profile and email
    app.get('/auth/google',
    passport.authenticate('google',{
        scope: ['profile','email']
    })
    );

    //handle call back and handle authenticate
    app.get('/auth/google/callback',
    passport.authenticate('google')
    );
}
