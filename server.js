const express = require('express');




//app setup
//Using port 3000,
let port = 3000 || process.env.PORT;
/*this app binding will be instance
of express framework*/
const app = express();



require('./StockApi/index.js')(app);


app.get('/', (request, response) => {
     response.send('Welcome')
})


app.listen(port, () => {
     console.log(`Listening at ${port}`);
})
