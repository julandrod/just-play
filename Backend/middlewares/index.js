const errorsMiddleware = require("./errors.middleware");
const notFoundMiddleware = require("./notFound.middleware");
const validatorMiddleware = require("./validator.middleware");

module.exports = {
  errorsMiddleware,
  notFoundMiddleware,
  validatorMiddleware,
};
