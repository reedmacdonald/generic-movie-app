import { createSlice } from '@reduxjs/toolkit';
import { array_move } from '../../functions'

export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        darkMode: false
    },
    reducers: {
        toDarkMode: state => {
            state.darkMode = true
        },
        toLightMode: state => {
            state.darkMode = false
        },

    },
});

export const { toDarkMode, toLightMode } = colorSlice.actions;





export const selectColor = state => {
    return state.colors.darkMode
};

export default colorSlice.reducer;