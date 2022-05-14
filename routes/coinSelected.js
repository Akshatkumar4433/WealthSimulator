const { response } = require('express');
const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/:id', (request, response,next) => {
         request.app.locals.coinPicked = request.params.id;
         response.redirect('/profile')
         next()
    });
   return router;
}