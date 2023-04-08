const router = require('express').Router()
const WorkoutRoute = require('./workoutRoutes') 

router.use('/workout', workoutRoute)

module.exports = router