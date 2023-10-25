const gamesSchema = {
  location: {
    exists: { bail: true, errorMessage: "Location is required" },
    trim: true,
    isLength: {
      errorMessage: "Location must be between 3 and 50 characters",
      options: { min: 3, max: 50 },
    },
  },
  location: {
    exists: { bail: true, errorMessage: "City is required" },
    trim: true,
    isLength: {
      errorMessage: "City must be between 3 and 50 characters",
      options: { min: 3, max: 50 },
    },
  },
  date: {
    exists: { bail: true, errorMessage: "Date is required" },
    match: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-[0-9]{4}$/,
  },
  time: {
    exists: { bail: true, errorMessage: "Time is required" },
    match: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  },
  image: {
    optional: {
      nulleable: true,
    },
    isURL: {
      errorMessage: "Invalid URL",
    },
  },
  // TODO: validate every object in the array teams
  teams: {
    exists: { bail: true, errorMessage: "Teams is required" },
    isArray: {
      errorMessage: "Teams must be an array",
        },
  },
  status: {
    optional: {
      nulleable: true,
    },
    trim: true,
    isIn: {
      options: "pending, done, cancel",
      errorMessage: "Invalid status",
    },
  },
};

module.exports = { gamesSchema };
