var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport')
//contains schema
var User = require('../app/models/user')


module.exports = function() {
    /* passport session setup */
    // what should be stored in session
    passport.serializeUser((user, done) => {
            done(null, user.id);
        });
    /*
        After session is established 
        This helps server to find user from id
        when it gets request from user's browser
    */
    passport.deserializeUser((id, done) => {
            User.findById(id, function (err, user) {
                done(err, user);
            });
        });

    /* Sign Up */

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback : true,
    },
    function(req, email, password, done) {

        process.nextTick(function () {

            User.findOne({'local.email': email}, function(err, user) {
                if (err)
                    return done(err);
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'The email already exists'))
                }
                else {
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser)
                    })
                }
            })
            
        })
    }
    )
    )

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    function(req, email, password, done) {
        User.findOne({'local.email': email}, (err, user) => {
             if (err)
                return done(err);
        
        if (err)
            return done(err);
        if (!user) 
            return done(null, false, req.flash('loginMessage', 'User not Found'))
        if (!user.validPassword(password))
            return done(null, false, req.flash('loginMessage'),"Wrong Password" ) 
        return done(null ,user)
        
    });
}));
}
