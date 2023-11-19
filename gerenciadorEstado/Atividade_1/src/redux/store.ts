import { configureStore } from "@reduxjs/toolkit";
import CaixaReducer from "./slices/caixa.slice";
import TaskReducer from "./slices/task.slice";

export const store = configureStore({
  reducer: {
    caixa: CaixaReducer,
    task: TaskReducer 
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
