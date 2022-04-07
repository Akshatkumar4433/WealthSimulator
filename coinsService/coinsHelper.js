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
    this.coinsAllNamesPrices = this.getAllNamesPrices();
  }
  async getAllNamesPrices() {
     const coinsAllNamesPrices  =  await this.coinsAllArray;
    return coinsAllNamesPrices.map(c => {
      return {'name':c.name, 'price': c.price.toFixed(3)}
    }).filter(c => c.name.length !== 0) //some coins have no name empty string
  }

  async getAllNames() {
    const coinsAllNames  =  await this.coinsAllArray;
   return coinsAllNames.map(c => {
     return c.name
   }).filter(c => c.length !== 0)
  }

  async getPrice(name) {
    let coinslist = await this.coinsAllNamesPrices;
    return coinslist.filter(c => c.name == name)[0].price
  }

  async getAllInfo(name) {
    let coinslist = await this.coinsAllArray;
    return coinslist.filter(c => c.name)[0]
  }

}

module.exports = coinsHelper;
