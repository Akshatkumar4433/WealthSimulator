const coinApiData = require('./getCoinsFromApi');


async function getCoins() {
  try {
    let coinsArray = await coinApiData();
    return coinsArray
  }
  catch(error) {
    console.log(error);
  }
}

class coinsHelper {
  constructor() {
    this.coinsAllArray = getCoins()
  }
  async getAllNamesPrices() {
     const coinsAllNamesPrices  =  await this.coinsAllArray;
    return coinsAllNamesPrices.map(c => {
      return {'name':c.name, 'price': c.price}
    }).filter(c => c.name.length !== 0) //some coins have no name empty string
  }
  
}

/* TESTING */
let instance = new coinsHelper()
instance.getAllNamesPrices().then(value => {console.log(value)})
