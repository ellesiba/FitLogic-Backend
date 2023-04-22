const mongoose = require = require("mongoose")

const WorkoutSchema = {
      Name: {type: String, require: true},
      Description: {type: String, require: true},
      PrimaryMuscles: {type: String},
      SecondaryMuscles :{type: String},
      Youtube:{type: String }
  };

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout
