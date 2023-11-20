import { configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import TaskReducer from "./slices/task.slice";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  task: TaskReducer,
})


const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

