const router = require("express").Router();
const gamesCtrls = require("../controllers/games.controllers");
const { validatorMiddleware } = require("../middlewares");
const { gamesSchema } = require("../schemas/games.schema");

router.get("/", gamesCtrls.getAllGames);

router.get("/:gameId", gamesCtrls.getSingleGame);

router.post("/", validatorMiddleware(gamesSchema), gamesCtrls.postGame);

router.patch("/:gameId", gamesCtrls.patchGame);

router.delete("/:gameId", gamesCtrls.deleteGame);

module.exports = router;
