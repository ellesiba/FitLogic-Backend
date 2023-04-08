const router = require('express').Router()
const workoutRoute = require('./workoutRoutes') 

router.use('/workout', workoutRoute)

module.exports = router
