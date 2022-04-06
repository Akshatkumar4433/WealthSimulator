const axios = require( "axios");

module.exports = () => {
  const options = {
    method: 'GET',
    url: 'https://stock-market-data.p.rapidapi.com/market/index/nasdaq-one-hundred',
    headers: {
      'X-RapidAPI-Host': 'stock-market-data.p.rapidapi.com',
      'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287'
    }
  };
  async function symbols()  {
     try {
       let sym = await axios.request(options);
          return sym.data.stocks
     }
     catch(err) {
       return err
     }
  }
  return  symbols()
}
