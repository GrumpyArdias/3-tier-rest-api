const workoutSql = require("../db/sql/workout-sql");
const { v4: uuid } = require("uuid");

const getAllWorkouts = async () => {
  const allWorkouts = await workoutSql.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const oneWorkout = workoutJson.getOneWorkout(workoutId);
  return oneWorkout;
};
const createNewWorkout = async (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    equipment: JSON.stringify(newWorkout.equipment),
    exercises: JSON.stringify(newWorkout.exercises),
    trainerTips: JSON.stringify(newWorkout.trainerTips),
  };

  const createdNewWorkout = await workoutSql.createNewWorkout(workoutToInsert);
  return createdNewWorkout;
};

const updateOneWorkout = async (workoutId, workoutBody) => {
  const workoutToUpdate = {
    ...workoutBody,
    equipment: JSON.stringify(workoutBody.equipment),
    exercises: JSON.stringify(workoutBody.exercises),
    trainerTips: JSON.stringify(workoutBody.trainerTips),
  };

  return await workoutSql.updateOneWorkout(workoutId, workoutToUpdate);
};

deleteOneWorkout = (workoutId) => {
  const deletedWorkout = workoutSql.deletedWorkout(workoutId);

  return deletedWorkout;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
