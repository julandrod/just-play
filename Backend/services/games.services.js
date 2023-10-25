const { Op } = require("sequelize");
const { Games } = require("../database/models");
const CustomError = require("../helpers/errorResponse");

/**
 * Find all games in the database
 *
 * @returns rows - Array with a list of games in the database
 * @returns count - count of games in the database
 */
// TODO: add more query params
const findAllGames = async ({ filter, status, date, time }) => {
  try {
    console.log(status);
    let customQuery = {};

    if (filter) {
      customQuery = {
        [Op.or]: [
          { location: { [Op.iLike]: `%${filter}%` } },
          { city: { [Op.iLike]: `%${filter}%` } },
          {
            teams: {
              [Op.contains]: [{ team: filter }],
            },
          },
        ],
      };
    }
    if (status) {
      customQuery = { ...customQuery, status: status };
    }
    if (date) {
      customQuery = { ...customQuery, date: date };
    }
    if (time) {
      customQuery = { ...customQuery, time: time };
    }

    const games = await Games.findAndCountAll({
      where: customQuery,
      order: [
        ["date", "ASC"],
        ["time", "ASC"],
      ],
    });
    return games;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

/**
 * Find a game by its Id in the database
 * @param {UUID} gameId Id of the game to find
 * @returns game with the specific Id in the database
 */
const findGameById = async (gameId) => {
  try {
    const singleGame = await Games.findOne({
      where: { id: gameId },
    });

    if (!singleGame) {
      throw new CustomError("There are no games with this Id", 404);
    }

    return singleGame;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

/**
 * Create a new game in the database, if the game already exists, throw an error
 * @param {String} location String with the location of the game
 * @param {String} city String with the name of the city
 * @param {Date} date Date of the game in the format M-D-Y
 * @param {Time} time Time of the game in the format H:M
 * @param {String} image String with the url of the team image (Model has a default value)
 * @param {String} teams Array of objects with the teams playing in the game in the format [{team: "team", score: 0}]
 * @returns Error if the game already exists
 * @returns New game in the database
 */
const createNewGame = async (
  location,
  city,
  date,
  time,
  image,
  teams,
  status
) => {
  try {
    const [response, created] = await Games.findOrCreate({
      where: {
        [Op.and]: {
          location,
          date,
          time,
          teams,
        },
      },
      defaults: {
        location,
        city,
        date,
        time,
        image,
        teams,
        status,
      },
    });

    if (!created) {
      throw new CustomError("This game already exists");
    }

    return response;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

/**
 * Update and existing game in the database, only update the necessary parameters
 * @param {Game} gameToUpdate Game to updated
 * @param {String} String with the new location
 * @param {Date} date String with the new location
 * @param {Time} time new time for the game
 * @param {String} image String with the new image url
 * @param {String} teams String with the teams modifications
 * @returns
 */
const updateGameById = async (
  gameToUpdate,
  location,
  date,
  time,
  image,
  teams
) => {
  try {
    await gameToUpdate.update({ location, date, time, image, teams });
    gameToUpdate.save();

    return gameToUpdate;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

/**
 * Soft Delete a game in the database
 * @param {UUID} gameId Id of the game to delete
 * @param {Game} gameToDelete Game in the database to delete
 * @returns
 */
const deleteGameById = async (gameId, gameToDelete) => {
  try {
    await gameToDelete.destroy();

    return `Game ${gameId} deleted succesfully`;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = {
  findAllGames,
  findGameById,
  createNewGame,
  updateGameById,
  deleteGameById,
};
