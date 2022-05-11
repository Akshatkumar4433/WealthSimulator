const { response } = require('express');
const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (request, response) => {
         router.locale.coin = coin.selected;
         response.redirect('/profile')
    });
   return router;
}