import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export {};

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
  params: {
    tag: '3d.mmorpg.fantasy.pvp',
    platform: 'pc',
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '529c510937msh57dccacde24e4c4p106006jsnbc5ee2d054d2',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

const initialState = {
  games: [],
  isLoading: false,
  hasError: false,
};

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchGames.fulfilled, (state, action) => {
        const gamesFetched = action.payload;
        return { ...state, isLoading: false, games: gamesFetched };
      })
      .addCase(fetchGames.rejected, (state) => ({ ...state, isLoading: false, hasError: true }));
  },
});

export default gamesSlice.reducer;
