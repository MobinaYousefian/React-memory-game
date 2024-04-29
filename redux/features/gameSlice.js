import {createSlice} from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name : "start",
    initialState : {
        isStarted : false,
        isClicked : false,
        characters : [],
        openCards : [],
    },
    reducers : {
        startGame : (state) => {
            state.isStarted = true;
        },

        endGame : (state) => {
            state.isStarted = false;
            state.isClicked = false;
            state.characters = [];
        },

        clickItem : (state) => {
            state.isClicked = !state.isClicked;
        },

        setCharacters : (state, action) => {
            state.characters = action.payload;
        }
    }
});

export const {endGame, startGame, clickItem, setCharacters} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;