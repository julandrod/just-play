import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllGames = createAsyncThunk(
  "games/getAllGames",
  async ({ filter, status, date, time }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/games/?filter=${filter}&status=${status}&date=${date}&time=${time}`
      );
      return data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleGame = createAsyncThunk(
  "games/getSingleGame",
  async ({ gameId }, { rejectWithValue }) => {
    console.log(gameId);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/games/${gameId}`
      );
      return data;
    } catch (error) {
      console.log("error: ", error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createGame = createAsyncThunk(
  "games/createGame",
  async ({ location, city, date, time, teams }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/games/", {
        location,
        city,
        date,
        time,
        teams,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  games: [],
  singleGame: "",
  gamesCount: "",
  gamesLoading: false,
  gamesError: false,
  errorInfo: "",
  statusCode: "",
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    clearStatusCode: (state) => {
      state.statusCode = "";
    },
    clearErrorInfo: (state) => {
      state.errorInfo = "";
      state.statusCode = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all games from the API
      .addCase(getAllGames.pending, (state) => {
        state.gamesLoading = true;
      })
      .addCase(getAllGames.fulfilled, (state, action) => {
        state.gamesLoading = false;
        state.gamesCount = action.payload.body.count;
        state.games = action.payload.body.rows;
        state.statusCode = action.payload.code;
      })
      .addCase(getAllGames.rejected, (state, action) => {
        state.gamesLoading = false;
        state.gamesError = true;
        state.errorInfo = action.payload.error;
        state.statusCode = action.payload.code;
      })
      // Get single game from the API
      .addCase(getSingleGame.pending, (state) => {
        state.gamesLoading = true;
      })
      .addCase(getSingleGame.fulfilled, (state, action) => {
        state.gamesLoading = false;
        state.statusCode = action.payload.code;
        state.singleGame = action.payload.body;
      })
      .addCase(getSingleGame.rejected, (state, action) => {
        state.gamesLoading = false;
        state.gamesError = true;
        state.errorInfo = action.payload.error;
        state.statusCode = action.payload.code;
      })
      // Create a game and save it in the API
      .addCase(createGame.pending, (state) => {
        state.gamesLoading = true;
      })
      .addCase(createGame.fulfilled, (state, action) => {
        state.gamesLoading = false;
        state.singleGame = action.payload.body;
        state.statusCode = action.payload.code;
      })
      .addCase(createGame.rejected, (state, action) => {
        state.gamesLoading = false;
        state.gamesError = true;
        state.errorInfo = action.payload.error;
        state.statusCode = action.payload.code;
      });
  },
});

export const { clearStatusCode, clearErrorInfo } = gamesSlice.actions;

export const selectGamesState = (state) => state.games;

export default gamesSlice.reducer;
