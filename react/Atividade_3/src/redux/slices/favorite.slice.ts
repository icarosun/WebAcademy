import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Favorite {
  idMovie: number;
}

interface FavoriteState {
  favoriteMovies: Favorite[];
}

const initialState: FavoriteState = {
  favoriteMovies: []
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
    isInTheFavoriteMovie: (state, action: PayloadAction<number>) => {
      !!state.favoriteMovies.find((favoriteMovie) => favoriteMovie.idMovie === action.payload);
    }
  }
});

export const { addFavoriteMovie, removeFavoriteMovie } = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
