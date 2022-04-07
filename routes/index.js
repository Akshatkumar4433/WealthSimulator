const express = require('express');
const router = express.Router();

const stocksRefresh = require('../StockApi/index')


module.exports = () => {
  router.get('/', (request,response) => {
    response.render('layout', {template: 'login'})
  })

  router.use('/stocksRefresh', stocksRefresh() )
  return router;
}
