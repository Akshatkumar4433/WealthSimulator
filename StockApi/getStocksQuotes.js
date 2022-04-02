const axios = require("axios");

module.exports = (symbols) => {
     let stocks = {};
     for(let stock of symbols) {
       const options = {
         method: 'GET',
         url: 'https://stock-market-data.p.rapidapi.com/stock/quote',
         params: {ticker_symbol: stock},
         headers: {
           'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com',
           'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287'
         }
       };
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
