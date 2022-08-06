const workout = require("../db/json/workout-json");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const oneWorkout = workout.getOneWorkout(workoutId);
  return oneWorkout;
};
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createdNewWorkout = workout.createdNewWorkout(workoutToInsert);
  return createdNewWorkout;
};
const updateOneWorkout = (workoutId, workoutBody) => {
  const getingWorkout = workout.getOneWorkout(workoutId);

  if (!getingWorkout) return;

  const updatedWorkout = {
    ...getingWorkout,
    ...workoutBody,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  return workout.updateOneWorkout(updatedWorkout);
};
deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
