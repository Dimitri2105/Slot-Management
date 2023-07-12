const express = require('express')
const slotController = require('../controllers/slotController')

const router = express.Router()

router.post('/addSlot',slotController.addToStorage)

module.exports = router