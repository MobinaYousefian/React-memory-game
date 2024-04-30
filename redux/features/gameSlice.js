import {createSlice} from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name : "start",
    initialState : {
        isStarted : false,
        characters : [],
        openCards : [],
        foundPairs : {},
    },
    reducers : {
        startGame : (state) => {
            state.isStarted = true;
        },

        endGame : (state) => {
            state.isStarted = false;
            state.characters = [];
            state.openCards = [];
            state.foundPairs = {};
        },

        setCharacters : (state, action) => {
            state.characters = action.payload;
        },

        setOpenCards : (state, action) => {
            state.openCards = [...state.openCards, action.payload];
        },

        clearOpenCards : (state) => {
            state.openCards = []
        },

        setFoundPairs : (state, action) => {
            state.foundPairs[action.payload] = true;
        },
    }
});

export const {endGame, startGame, setCharacters, setOpenCards, clearOpenCards, setFoundPairs} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;