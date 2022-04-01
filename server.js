const express = require('express');
const axios = require( "axios");



//app setup
//Using port 3000,
let port = 3000 || process.env.PORT;
/*this app binding will be instance
of express framework*/
const app = express();



const options = {
  method: 'GET',
  url: 'https://stock-market-data.p.rapidapi.com/market/index/nasdaq-one-hundred',
  headers: {
    'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com',
    'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287'
  }
};


 async function stocks() {
     try  {
     let stockSymbol = await axios.request(options)
     console.log(stockSymbol.data)
     }
     catch(error) {
       console.log(error)
     }
 }
 stocks()


app.get('/', (request, response) => {
     response.send('Welcome')
})


app.listen(port, () => {
     console.log(`Listening at ${port}`);
})
