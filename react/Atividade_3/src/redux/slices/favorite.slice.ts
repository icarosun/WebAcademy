import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Favorite {
  idMovie: number;
  titleMovie: string;
}

interface FavoriteState {
  favoriteMovies: Favorite[];
}

const initialState: FavoriteState = {
  favoriteMovies: [],
}

const favoriteMovieSlice = createSlice({
  name: 'favoriteMovie',
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<Favorite>) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavoriteMovie: (state, action: PayloadAction<Favorite>) => {
      state.favoriteMovies = state.favoriteMovies.filter((favoriteMovie) => favoriteMovie.idMovie != action.payload.idMovie)
    },
  }
});

export const { addFavoriteMovie, removeFavoriteMovie } = favoriteMovieSlice.actions;

export const isMovieInTheFavoriteList = (id: number) => (state: any) => {
   return !!state.favorite.favoriteMovies.find((favoriteMovie: any) => favoriteMovie.idMovie === id);
}

export default favoriteMovieSlice.reducer;
