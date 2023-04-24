// //======== DEPENDENCIES=============
// require("dotenv").config();
// const { PORT } = process.env;
// const express = require("express");
// const app = express();
// const routes = require('./routes/index')
// const cors = require('cors')
// const session = require('express-session')

// //============= SESSIONS ==================

// const SESSION_SECRET = process.env.SESSION_SECRET
// console.log('Here is the session secret')
// console.log(SESSION_SECRET)
// app.use(session({
// 	secret: SESSION_SECRET, 
// 	resave: false, 
// 	saveUninitialized: false 
// }))

// // ======== MiddleWare ===============
// app.use(cors()); 
// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

// //======== ROUTES ==============
// app.use("/", routes);

// app.use((req,res) => {
//     res.status(404).json({message: "NOT A PROPER ROUTE"})
// })

// //======== LISTENER =============
// app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Group1:BestGroupGroup1BestTeam123GoGO@fitlogic.cbuhs8w.mongodb.net/yourDatabaseName?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const WorkoutSchema = new mongoose.Schema({
  workout: String,
  sets: String,
  reps: String,
  category: String,
  youtubeVideo: String,
});

const Workout = mongoose.model('Workout', WorkoutSchema);

app.get('/workouts', async (req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
});

app.post('/workouts', async (req, res) => {
  const newWorkout = new Workout(req.body);
  await newWorkout.save();
  res.json(newWorkout);
});

app.put('/workouts/:id', async (req, res) => {
  const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedWorkout);
});

app.delete('/workouts/:id', async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.json({ message: 'Workout deleted successfully' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
