const express = require('express');
const path = require('path')
const routes = require('./routes')


//app setup
//Using port 3000,
let port = 3000 || process.env.PORT;
/*this app binding will be instance
of express framework*/
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.use('/', routes())


require('./StockApi/index.js')(app);




app.listen(port, () => {
     console.log(`Listening at ${port}`);
})
