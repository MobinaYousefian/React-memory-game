import {createSlice} from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name : "start",
    initialState : {
        isStarted : false,
        isPreview : false,
        characters : [],
        openCards : [],
        isFlipped : false,
        foundPairs : {},
        isFinished : false,
    },
    reducers : {
        startGame : (state) => {
            state.isStarted = true;
            state.isPreview = true;
        },

        endGame : (state) => {
            state.isStarted = false;
            state.characters = [];
            state.openCards = [];
            state.foundPairs = {};
            state.isFinished = false;
        },

        setIsPreview : (state, action) => {
          state.isPreview = action.payload
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

        setIsFinished : (state) => {
            state.isFinished = true;
        }
    }
});

export const {endGame, startGame, setIsPreview,setCharacters, setOpenCards, clearOpenCards, setFoundPairs, setIsFinished} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;