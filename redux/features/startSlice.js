import {createSlice} from "@reduxjs/toolkit";

export const startSlice = createSlice({
    name : "start",
    initialState : {
        isStarted : false
    },
    reducers : {
        startGame : (state) => {
            state.isStarted = true
        },

        endGame : (state) => {
            state.isStarted = false
        }
    }
});

export const {endGame, startGame} = startSlice.actions;
export const startReducer = startSlice.reducer;