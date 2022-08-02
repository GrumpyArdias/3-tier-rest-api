const Workout = require("../db/json/workout-json");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};
getOneWorkout = () => {
  return;
};
createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdNewWorkout = Workout.createdNewWorkout(workoutToInsert);
  return createdNewWorkout;
};
upadteOneWorkout = () => {
  return;
};
deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  upadteOneWorkout,
  deleteOneWorkout,
};
