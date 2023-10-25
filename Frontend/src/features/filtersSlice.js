import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  date: "",
  time: "",
  status: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      if (action.payload.name === "date") {
        state[action.payload.name] = new Date(action.payload.value).toISOString();
      } else {
        state[action.payload.name] = action.payload.value;
      }
    },
    clearFilters: (state) => {
      state.query = "";
      state.date = "";
      state.time = "";
      state.status = "";
    },
  },
});

export const { updateFilters, clearFilters } = filtersSlice.actions;

export const selecFiltersState = (state) => state.filters;

export default filtersSlice.reducer;
