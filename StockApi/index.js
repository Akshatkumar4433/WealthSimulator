const stockSymbols = require('./stockSymbols');
const getStocksQuotes = require('./getStocksQuotes');

module.exports = (app) => {
  app.use(async function(request, response,next){
     try {
      app.locals.stocks = await getStocksQuotes(await stockSymbols());
      console.log(app.locals.stocks)
     return next();
     }
     catch(err) {
       return next(err)
     }
  })
}
