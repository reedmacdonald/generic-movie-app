import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlice'
import colorReducer from '../features/colors/colors'

export default configureStore({
  reducer: {
    movies: movieReducer,
    colors: colorReducer
  },
});
