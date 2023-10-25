const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "⚽ Just Play - List of Games",
      version: "1.0.0",
      description:
        "Simple CRUD for soccer games.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Julian Rodriguez",
        url: "https://github.com/julandrod",
        email: "julian.andres.rodriguez@gmail.com",
      },
    },
    servers: [
      {
        url: "https://just-play.onrender.com/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = options;
