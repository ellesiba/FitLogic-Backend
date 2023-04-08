const db = require('../models')

const getWorkout = (req, res) => {
    db.Workout.find({})
    .then((foundWorkout) => {
        console.log(foundWorkout)
        if(!foundWorkout){
            res.status(404).json({message: "Cannot find Workout"})
        } else {
            res.status(200).json({data: foundWorkout})
        }
    })
}

const createWorkout = (req, res) => {
    db.Workout.create(req.body)
    .then((createdWorkout) => {
        if(!createdWorkout){
            res.status(404).json({message: "Cannot create Workout"})
        } else {
            res.status(201).json({data: createdWorkout})
        }
    })
}

const updateWorkout = (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedWorkout) => {
        if(!updatedWorkout){
            res.status(400).json({Message: 'Could not update workout'})
        } else {
            res.status(200).json({Data: updatedWorkout, Message: 'updated workout'})
        }
    })
}

const deleteWorkout = (req, res) => {
    db.Workout.findByIdAndDelete(req.params.id)
    .then((deletedWorkout) => {
        if(!deletedWorkout){
            res.status(400).json({Message: 'Could not delete workout'})
        } else {
            res.status(200).json({Data: deletedWorkout, Message: 'deleted workout'})
        }
    })
}

module.exports = {
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
