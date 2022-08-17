const e = require("express");
const Workout = require("./models/Workout");
const db = require("./sqlconection");

db.sync();

const getAllWorkouts = async () => {
  return await Workout.findAll();
};

const createNewWorkout = async (newWorkout) => {
  const result = await Workout.create({
    name: newWorkout.name,
    mode: newWorkout.mode,
    equipment: newWorkout.equipment,
    exercises: newWorkout.exercises,
    trainerTips: newWorkout.trainerTips,
  });
  return result;
};

const updateOneWorkout = async (workoutId, workoutChanges) => {
  await Workout.update(workoutChanges, {
    where: { id: workoutId },
  });

  const updatedWorkout = await Workout.findOne({ where: { id: workoutId } });

  return updatedWorkout;
};

const deletedWorkout = async (workoutId) => {
  const deleteID = await Workout.destroy({ where: { id: workoutId } });
  return deleteID;
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  updateOneWorkout,
  deletedWorkout,
};
