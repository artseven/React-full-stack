const express        = require('express');
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app            = express();
//new instance of passport google strategy
passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;
app.listen(PORT);

