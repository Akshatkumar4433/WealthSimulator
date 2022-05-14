const express = require('express');
const router = express.Router();
const coinsHelper = require('../coinsService/coinsHelper');

module.exports = () => {
    router.get('/:id', async (request, response,next) => {
         //accessing app.locals using request
         //coinPicked binding is server.js
         request.app.locals.coinPicked = undefined;
         let coinInfo = new coinsHelper();
         coinInfo = await coinInfo.getAllInfo(request.params.id);
         request.app.locals.coinPicked = coinInfo;
         response.redirect('/profile')
         next()
    });
   return router;
}