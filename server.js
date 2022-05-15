const express = require('express');
const path = require('path');
const routes = require('./routes');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const coinsHelper = require('./coinsService/coinsHelper');
const passport = require('passport')
const flash = require('connect-flash')
const configDB = require('./config/database.js');
const mongoose = require('mongoose');


mongoose.connect(configDB.url)

//app setup
//Using port 3000,
let port = 3000 || process.env.PORT;
/*this app binding will be instance
of express framework*/
const app = express();

app.use(morgan('dev'))
app.use(cookieParser());
app.use(bodyParser());

/*creating session*/
app.use(session({
  secret: 'ilovemyself'
})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./config/passport')(passport);



//Static Files, view engine, template setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))
app.use(express.static(path.join(__dirname, './static')))


//getting coin data
app.use(async (request, response, next) => {
  try {
    let coins = new coinsHelper();
    response.locals.coins = await coins.getNamesPricesSymbols()
    return next()
  }
  catch(error) {
    return next(error)
  }
})


//This is a hack, need to find a solution
app.locals.coinPicked = undefined;

app.use('/', routes())





app.listen(port, () => {
     console.log(`Listening at ${port}`);
})
