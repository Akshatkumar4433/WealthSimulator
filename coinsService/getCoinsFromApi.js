const axios =  require('axios');

module.exports = () => {
  const apiUrl = 'https://www.cryptingup.com/api/assets'
  async function getCoinsArray() {
    try {
      let CoinsArray = await axios.get(apiUrl);
      return CoinsArray.data.assets;
    }
    catch(error) {
      console.error(error)
    }
  }
  return getCoinsArray();
}
