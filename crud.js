const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017/workouts";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const workoutSchema = new mongoose.Schema({
  name: String,
  workout: String,
  reps: Number,
  youtubeVideo: String
});

const Workout = mongoose.model('Workout', workoutSchema);

app.post('/addWorkout', (req, res) => {
  const newWorkout = new Workout(req.body);
  newWorkout.save((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
