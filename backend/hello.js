const express = require('express')



const router = express.Router()
router.get('/', (request, response) => {
  const responseBody = {"text":"Hello is from Backend"}
  response.json(responseBody)
    
})

module.exports = router