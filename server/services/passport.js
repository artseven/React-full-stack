const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose       = require('mongoose');
const keys           = require('../config/keys');

const User           = mongoose.model('users');

passport.serializeUser((user, done) => {
    //user.id refers to unique identifier created for mongo 'user' record
    done(null, user.id);
})
//new instance of passport google strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    //we already have a record with this profile ID
                    done(null, existingUser);
                } else {
                    //we don't have a record, create new
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            })
    })
);
