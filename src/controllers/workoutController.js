const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send(`Get workout ${req.params.workoutId}`);
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
  const upadated = workoutService.upadteOneWorkout();
  res.send(`Upadte workout ${req.params.workoutId}`);

  //Buscar ID del que quiero modificar y se reemplaza
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send(`Create workout ${req.params.workoutId}`);

  // Reescribir el JSON elminando el ID necesario
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
