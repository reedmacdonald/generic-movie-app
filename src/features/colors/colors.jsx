import { createSlice } from '@reduxjs/toolkit';
import { array_move } from '../../functions'

export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        darkMode: !!!localStorage.getItem('lightMode')
    },
    reducers: {
        toDarkMode: state => {
            localStorage.removeItem('lightMode')
            state.darkMode = true
        },
        toLightMode: state => {
            localStorage.setItem('lightMode', 'true')
            state.darkMode = false
        },

    },
});

export const { toDarkMode, toLightMode } = colorSlice.actions;

export const selectColor = state => {
    return state.colors.darkMode
};

export default colorSlice.reducer;