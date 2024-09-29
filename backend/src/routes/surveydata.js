const express = require('express')
const { form } = require('../controllers/surevey.controller')

const router = express.Router()


router.post('/survey',form)



module.exports = router