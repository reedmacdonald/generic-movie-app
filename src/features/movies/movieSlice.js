import { createSlice } from '@reduxjs/toolkit';
import { array_move } from '../../functions'

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
        setAllItems: (state, action) => {
            const entries = Object.entries(action.payload)
            entries.forEach((entry) => {
                state.movieList[entry[0]] = entry[1]
            })
        },
        removeItem: (state, action) => {
            state.movieList[action.payload.where].splice(action.payload.index, 1)
        },
        addComment: (state, action) => {
            state.movieList[action.payload.where][action.payload.index] = action.payload
        }

    },
});

export const { addComment, setAllItems, addToToWatch, moveItem, reorderItem, removeItem } = movieSlice.actions;

export const selectCount = state => {
    return state.movies.movieList
};

export default movieSlice.reducer;