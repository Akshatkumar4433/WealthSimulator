const express = require('express');
const router = express.Router();
const stockSymbols = require('./stockSymbols');
const getStocksQuotes = require('./getStocksQuotes');

module.exports = () => {
   router.use(async function(request, response,next){
     try {
       /*
      router.locals.stocks = await getStocksQuotes(await stockSymbols());
      console.log(app.locals.stocks)
      */
      console.log(await stockSymbols())
     return next();
     }
     catch(err) {
       return next(err)
     }
  })
  return router;
}
