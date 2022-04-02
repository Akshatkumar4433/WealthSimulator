const axios = require("axios");

module.exports = (symbols) => {
     let stocks = {};
     aysnc function getStocks() {
       for(let i = 0; i<=5; i++) {
         const options = {
           method: 'GET',
           url: 'https://stock-market-data.p.rapidapi.com/stock/quote',
           params: {ticker_symbol: symbols[i]},
           headers: {
             'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com',
             'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287'
           }
         };
         //Use Promise All Trick here 

     }
}
}

/*


const options = {
  method: 'GET',
  url: 'https://stock-market-data.p.rapidapi.com/stock/quote',
  params: {ticker_symbol: 'AAPL'},
  headers: {
    'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com',
    'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
