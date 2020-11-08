const router = require('express').Router()

const SpotigramController = require('../controllers/SpotigramController')

router.get('/', SpotigramController.home)
router.post('/', SpotigramController.main)

module.exports = router