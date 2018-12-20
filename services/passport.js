const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');

// access to model Class
const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
    //'user.id' is the unique id of users instance
    // do not need using '_id.$oid'
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleID: profile.id });

        if(existingUser) {
            // user Already Exists in DB
            return done(null, existingUser); // For Passport
        }
        // else // new user
        const user = await new User({
            googleID: profile.id
            ,   name: profile.displayName
        }).save();
        done(null, user);
    })
);