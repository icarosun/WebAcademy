import { configureStore } from "@reduxjs/toolkit";
import gameTicTacToeReducer from "./slices/game.slice";


export const store = configureStore({
  reducer: {
    game: gameTicTacToeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
