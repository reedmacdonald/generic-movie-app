import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movies/movieSlice'
import colorReducer from '../features/colors/colors'

export default configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
    colors: colorReducer
  },
});
