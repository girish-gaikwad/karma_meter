const express = require('express')
const { getvehical, getfueltype, getfoodtype, getappliances } = require('../controllers/get.contollers')

const router = express.Router()




router.get('/vehicaltype', getvehical)


router.get('/fueltype', getfueltype)
router.get('/foodtype',getfoodtype)
router.get('/appliances', getappliances)





module.exports = router