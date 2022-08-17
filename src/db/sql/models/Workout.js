const Sequelize = require("sequelize");
const db = require("../sqlconection");

const Workout = db.define("workout", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
  },
  mode: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  equipment: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  exercises: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  trainerTips: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Workout;
