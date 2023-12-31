require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Import database
const db = require("./database/models");

// Import routes
const routes = require("./routes");

// Middlewares
const { notFoundMiddleware, errorsMiddleware } = require("./middlewares");
const options = require("./swagger-doc/options");

// API config
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(morgan("dev", { skip: (req, res) => process.env.NODE_ENV === "test" }));

// API routes
app.get("/", (req, res) => {
  res.send("Just Play");
});
app.use("/api/v1", routes);

// Swagger Documentation route
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Handle errors
app.use(notFoundMiddleware);
app.use(errorsMiddleware);



// Start API
const startApi = async () => {
  console.log("Testing the database connection...");
  try {
    await db.sequelize.authenticate();
    console.log("Database authentication successfully");
    await db.sequelize.sync({ force: false, logging: false });
    console.log("Database synchronized");
    if (process.env.NODE_ENV !== "test") {
      app.listen(port, () => console.log(`Server start on port ${port}`));
    }
  } catch (error) {
    console.log("Unable to connect to the database ", error);
  }
};

startApi();

module.exports = app;
