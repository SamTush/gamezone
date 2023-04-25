import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games/gamesSlice';

export const Store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

export default Store;
