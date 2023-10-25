import * as yup from "yup";

/**
 * Yup schema for validating game data in the CreateGame page
 */
const gameSchema = yup.object().shape({
  location: yup
    .string()
    .min(3, "Must have at least 3 characters")
    .max(50, "Must have less than 50 characters")
    .required("Location is required"),
  city: yup
    .string()
    .min(3, "Must have at least 3 characters")
    .max(50, "Must have less than 50 characters")
    .required("City is required"),
  date: yup.date().required("Date is required"),
  time: yup.string().required("Time is required"),
  team1: yup
    .string()
    .min(2, "Must have at least 2 characters")
    .max(50, "Must have less than 50 characters")
    .required("Team 1 is required"),
  team2: yup
    .string()
    .min(2, "Must have at least 2 characters")
    .max(50, "Must have less than 50 characters")
    .required("Team 1 is required"),
});

export default gameSchema;
