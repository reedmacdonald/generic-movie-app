import { createSlice } from '@reduxjs/toolkit';
import { containsObject, array_move } from '../../functions'

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList: {
            toWatch: [],
            currentlyWatching: [],
            liked: [],
            disliked: []
        }
    },
    reducers: {
        increment: state => {
            state.movieList.toWatch.push('idk');
        },
        decrement: state => {
            state.movieList.toWatch.push('fuck');
        },
        addToToWatch: (state, action) => {
            state.movieList.toWatch.push(action.payload);
        },
        reorderItem: (state, action) => {
            array_move(state.movieList[action.payload.destination.droppableId], action.payload.source.index, action.payload.destination.index)
        },
        moveItem: (state, action) => {
            state.movieList[action.payload.destination.droppableId].splice(action.payload.destination.index, 0, state.movieList[action.payload.fromLocation][action.payload.fromSpot])
            state.movieList[action.payload.fromLocation].splice(action.payload.fromSpot, 1)

        },
    },
});

export const { increment, decrement, addToToWatch, moveItem, reorderItem } = movieSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(addToToWatch(amount));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => {
    return state.movies.movieList
};

export default movieSlice.reducer;