const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  console.log(workout);
  if (!workout) {
    return;
  }
  return workout;
};

const createdNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateOneWorkout = (updatedWorkout) => {
  for (let i = 0; i <= DB.workouts.length; i++) {
    if (DB.workouts[i].id === updatedWorkout.id) {
      DB.workouts[i] = updatedWorkout;
      saveToDatabase(DB);
      return "esta cambiado";
    }
  }
  return;
};
module.exports = {
  getAllWorkouts,
  createdNewWorkout,
  getOneWorkout,
  updateOneWorkout,
};
