const express = require('express')
var helpers = require('./helpers')

const router = express.Router()

router.get('/', (request, response) => {
    let imageUrls = helpers.getFiles('uploads');
    response.json(imageUrls.reverse());
})

module.exports = router