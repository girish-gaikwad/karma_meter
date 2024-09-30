const express = require('express')
const { postData } = require('../controllers/calculate.controller')
const router = express.Router()

router.post('/calculate',postData)

module.exports = router