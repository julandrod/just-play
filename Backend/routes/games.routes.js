const router = require("express").Router();
const gamesCtrls = require("../controllers/games.controllers");
const { validatorMiddleware } = require("../middlewares");
const { gamesSchema } = require("../schemas/games.schema");

/**
 * @swagger
 * /api/v1/games/:
 *   get:
 *     tags:
 *       - Games
 *     summary: Get all games
 *     parameters:
 *     - in: query
 *       name: filter
 *       schema:
 *         type: string
 *         format: string
 *       required: false
 *       description: Text to filter the list games, can be location, city or team
 *     - in: query
 *       name: date
 *       schema:
 *         type: string
 *         format: date
 *       required: false
 *       description: date to filter in format format Y-M-D (2023-10-25T00:00:00.000)
 *     - in: query
 *       name: time
 *       schema:
 *         type: string
 *         format: time
 *       required: false
 *       description: time time of the game in the format HH:MM (10:50)
 *     - in: query
 *       name: status
 *       schema:
 *         type: string
 *         format: enum
 *       required: false
 *       description: Status of the game, can be 'pending', 'done' or 'cancel'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
*/
router.get("/", gamesCtrls.getAllGames);

/**
 * @swagger
 * /api/v1/games/:
 *  post:
 *     tags:
 *       - Games
 *     summary: Create games
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               location: main stadium
 *               city: cali
 *               date: 12-23-23
 *               time: '6:10'
 *               teams:
 *                 - team: red
 *                 - team: blue
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
router.post("/", validatorMiddleware(gamesSchema), gamesCtrls.postGame);

/**
 * @swagger
 * /api/v1/games/{gameId}:
 *   get:
 *     tags:
 *       - Games
 *     summary: Get single game by id
 *     parameters:
 *     - in: path
 *       name: gameId
 *       schema:
 *         type: string
 *         format: uuid
 *       required: true
 *       description: UUID of the game to get
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
router.get("/:gameId", gamesCtrls.getSingleGame);

/**
 * @swagger
 * /api/v1/games/{gameId}:
 *  patch:
 *     tags:
 *       - Games
 *     summary: Update games
 *     parameters:
 *     - in: path
 *       name: gameId
 *       schema:
 *         type: string
 *         format: uuid
 *       required: true
 *       description: UUID of the game to get update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               teams: verde - negro
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
router.patch("/:gameId", gamesCtrls.patchGame);

/**
 * @swagger
 * /api/v1/games/{gameId}:
 *  delete:
 *     tags:
 *       - Games
 *     summary: Delete games
 *     parameters:
 *     - in: path
 *       name: gameId
 *       schema:
 *         type: string
 *         format: uuid
 *       required: true
 *       description: UUID of the game to get delete
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
router.delete("/:gameId", gamesCtrls.deleteGame);

module.exports = router;
