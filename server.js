const express = require('express');
const path = require('path')
const routes = require('./routes')
const coinsHelper = require('./coinsService/coinsHelper')


//app setup
//Using port 3000,
let port = 3000 || process.env.PORT;
/*this app binding will be instance
of express framework*/
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

//getting coin data
app.use(async (request, response, next) => {
  let coins = new coinsHelper();
  response.locals.coins = await coins.getAllNames()
  return next()
  }
)

app.use('/', routes())





app.listen(port, () => {
     console.log(`Listening at ${port}`);
})
