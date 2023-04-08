const router = require('express').Router()
const workoutRoute = require('./workoutRoutes') //IMPORTING people route methods

//URL DIRECTORY 
router.use('/workout', workoutRoute)

module.exports = router