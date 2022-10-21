/**
 * @file contains entry point of controllers api v1 module
 * @author Kelompok 4 FSW 2
 */

const authController = require("./authController");
const carController = require("./carController");

module.exports = {
  authController,
  carController
};