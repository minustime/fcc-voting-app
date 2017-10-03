const express = require('express')
const router = express.Router()
const userQueries = require('../queries/user')

// start with /user
router.get('/:user_id', userQueries.getUser)
router.post('/create', userQueries.createUser)
router.post('/login', userQueries.loginUser)

module.exports = router
