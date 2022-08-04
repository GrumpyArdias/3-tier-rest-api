const workout = require("../db/json/workout-json");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};

getOneWorkout = (workoutId) => {
  const oneWorkout = workout.getOneWorkout(workoutId);
  return oneWorkout;
};
createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createdNewWorkout = workout.createdNewWorkout(workoutToInsert);
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
