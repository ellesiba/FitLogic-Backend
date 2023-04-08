const mongoose = require = require("mongoose")

const WorkoutSchema = {
      name: {type: String, require: true},
      description: {type: String, require: true},
      repetition: {type: Number, required: true}
  };

const People = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout