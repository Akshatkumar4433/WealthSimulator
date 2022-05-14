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
    this.coinsAllArray = getCoins();
    //this.coinsAllNamesPrices = this.getAllNamesPrices();
  }
  async getSymbols() {
    const coinsSymbolsList  =  await this.coinsAllArray;
    return coinsSymbolsList.map( c => {
      return c.asset_id
    })
  }

  async getNames() {
    const coinsAllNames  =  await this.coinsAllArray;
   return coinsAllNames.map(c => {
     return c.name
   }).filter(c => c.length !== 0)
  }

  async getPrice(symbol) {
    let coinsPricelist = await this.coinsAllArray;
    return coinsPricelist.filter(c => c.asset_id == symbol)[0].price
  }

  async getAllInfo(symbol) {
    let coinslist = await this.coinsAllArray;
    return coinslist.filter(c => c.asset_id === symbol)[0]
  }

}

module.exports = coinsHelper;

//Testing
let coin = new coinsHelper()
coin.getSymbols().then(value => {console.log(value)})
coin.getPrice('ETH').then(value => {console.log(value)})
coin.getAllInfo('ETH').then(value => {console.log(value)})