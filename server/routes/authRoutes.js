const passport = require('passport');// npm package

//since app is not declared here, we export routes functions
module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', 
        passport.authenticate('google', { scope: ['profile', 'email']}),
        (req, res) => {
            res.redirect('/surveys');
        }
    );
        
    app.get('/api/logout',  (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

}
