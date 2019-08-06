const passport = require('passport');// npm package

//since app is not declared here, we export routes functions
module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));

}
