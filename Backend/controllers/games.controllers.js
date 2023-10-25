const { tryCatchWrapper, endpointResponse } = require("../helpers");
const gamesServices = require("../services/games.services");

const getAllGames = tryCatchWrapper(async (req, res, next) => {
  const {filter, status, date, time} = req.query;
  console.log(req.query)
  const allGames = await gamesServices.findAllGames({filter, status, date, time});

  endpointResponse({
    res,
    message: "Games listed successfully",
    body: allGames,
  });
});

const getSingleGame = tryCatchWrapper(async (req, res, next) => {
  const { gameId } = req.params;
  const singleGame = await gamesServices.findGameById(gameId);

  endpointResponse({
    res,
    message: "Game listed successfully",
    body: singleGame,
  });
});

const postGame = tryCatchWrapper(async (req, res, next) => {
  const { location, city, date, time, image, teams, status } = req.body;
  const newGame = await gamesServices.createNewGame(
    location,
    city, 
    date,
    time,
    image,
    teams,
    status
  );

  endpointResponse({
    res,
    code: 201,
    message: "Game created successfully",
    body: newGame,
  });
});

const patchGame = tryCatchWrapper(async (req, res, next) => {
  const { gameId } = req.params;
  const { location, date, time, image, teams } = req.body;
  // First try to find the game, if not exists throw an error
  const gameToUpdate = await gamesServices.findGameById(gameId);
  const gameUpdated = await gamesServices.updateGameById(
    gameToUpdate,
    location,
    date,
    time,
    image,
    teams
  );

  endpointResponse({
    res,
    message: "Game updated successfully",
    body: gameUpdated,
  });
});

const deleteGame = tryCatchWrapper(async (req, res, next) => {
  const { gameId } = req.params;
  // First try to find the game, if not exists throw an error
  const gameToDelete = await gamesServices.findGameById(gameId);
  const response = await gamesServices.deleteGameById(gameId, gameToDelete);

  endpointResponse({
    res,
    message: response,
  });
});

module.exports = {
  getAllGames,
  getSingleGame,
  postGame,
  patchGame,
  deleteGame,
};
