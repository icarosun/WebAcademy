import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetMovieDetails, MovieDetails } from "../../services/movie.details.service";

interface ModalInfoMovieState {
  isShow: boolean;
  movieDetails?: MovieDetails;
  isLoading: boolean;
  isSucess: boolean;
}

const modalInfoMovieInitialState: ModalInfoMovieState  = {
  isShow: false,
  movieDetails: undefined,
  isLoading: false,
  isSucess: false,
}

export const moreDetails = createAsyncThunk<MovieDetails, number>(
  "movie/moreDetails",
  async (idMovie, { rejectWithValue }) => {
    try {
      const response = await GetMovieDetails(idMovie);
      return response;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

export const modalControllerInfoMovieSlice = createSlice({
  name: "modaControll",
  initialState: modalInfoMovieInitialState,
  reducers: {
    closeModal(state) {
      state.isShow = false;
      state.isSucess = false;
      state.movieDetails = undefined; 
      state.isLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(moreDetails.fulfilled, (state, action: PayloadAction<MovieDetails>) => {
      state.isSucess = true;
      state.isLoading = false;
      state.isShow = true;
      state.movieDetails = action.payload;
    });
    builder.addCase(moreDetails.pending, (state) => {
      state.isSucess = false;
      state.isLoading = true;
      state.isShow = true;
    });
    builder.addCase(moreDetails.rejected, (state) => {
      state.isSucess = false;
      state.isLoading = false;
      state.isShow = false;
    })
  }
});

export const { closeModal } = modalControllerInfoMovieSlice.actions; 
export default modalControllerInfoMovieSlice.reducer;
