//const { request } = require('express');
const express = require('express');
const router = express.Router();
const passport = require('passport')
const coinSelected = require('./coinSelected')

module.exports = () => {
  router.get('/', (request,response) => {
    /* request.flash('loginMessage'), it is declared in passport.js file
       In scenerio of error there will be value assigned to it.
    */

    response.render('layout', {template: 'login',message: request.flash('loginMessage')})
  })
  router.post('/', passport.authenticate('local-login',{
    successRedirect: '/profile',
    failureRedirect: '/', 
    failureFlash: true,
  }))
  router.get('/signup', (request, response) => {
    response.render('layout', {template: 'signup', message: request.flash('signupMessage')})
    });
  router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect : '/signup',
    failureFlash: true, //allow flash messages
  }))


  router.get('/profile', isLoggedIn, (request,response) => {
    response.render('layout', {template: 'profile', user: request.user})
  })

  router.get('/logout', (request, response) => {
    request.logout();
    response.redirect('/')
  });

  router.use('/coinSelected', coinSelected())
  return router;
};

function isLoggedIn(request, response, next)
{
  if (request.isAuthenticated()) {
    return next();
  }
  response.redirect('/')
}