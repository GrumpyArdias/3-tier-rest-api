const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  console.log(`Este es el Workout ID ${workoutId}`);
  if (!workoutId) {
    console.log(workoutId);
    return;
  }
  const workout = workoutService.getOneWorkout(workoutId);
  console.log(`Este es el workout de controller ${workout}`);
  res.send({ status: "OK", data: workout });
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
  console.log(`---> ${createdWorkout}`);
};

const updateOneWorkout = (req, res) => {
  console.log(req.body, req.params.workoutId);
  const updateWorkoutId = req.params.workoutId;
  const updateWorkout = req.body;

  const updated = workoutService.updateOneWorkout(
    updateWorkoutId,
    updateWorkout
  );
  res.status(201).send({ status: "OK", data: updated });
};

const deleteOneWorkout = (req, res) => {
  const deleteWorkoutId = req.params.workoutId;
  const deleteWorkout = workoutService.deleteOneWorkout(deleteWorkoutId);
  if (!deleteWorkout) {
    res.status(404).send({ status: "Not Found", data: deleteWorkout });
  } else {
    res.status(201).send({ status: "OK", data: deleteWorkout });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
