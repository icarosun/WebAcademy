import FavoriteMoviesReducer from "./slices/favorite.slice"
import storageLocal from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  favorite: FavoriteMoviesReducer,
});

const persistConfig = {
  key: 'root',
  storage: storageLocal,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
