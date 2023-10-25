import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./features/gamesSlice";
import filtersReducer from "./features/filtersSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
    filters: filtersReducer,
  },
});
