const { response } = require('express');
const express = require('express');
const router = express.Router();

module.exports = () => {
    router.post('/coinSelected/:id', (request, response) => {
        console.log(request)
    })
    return router;
}