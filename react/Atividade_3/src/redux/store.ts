import FavoriteMoviesReducer from "./slices/favorite.slice"
import storageLocal from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import modalControllerInfoMovieSlice from "./slices/modalcontroll.slice";

const persistConfig = {
  key: 'root',
  storage: storageLocal,
  blacklist: ['modal']
}

const rootReducer = combineReducers({
  favorite: FavoriteMoviesReducer,
  modal: modalControllerInfoMovieSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
