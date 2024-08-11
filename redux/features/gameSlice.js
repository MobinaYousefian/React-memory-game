import {createSlice} from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name : "start",
    initialState : {
        timer : 0,
        isStarted : false,
        isPreview : false,
        characters : [],
        openCards : [],
        isFlipped : false,
        foundPairs : {},
        isFinished : false,
    },
    reducers : {
        setTimer : (state, action) => {
          state.timer += action.payload
        },

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
            state.timer = 0;
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

export const {setTimer, endGame, startGame, setIsPreview,setCharacters, setOpenCards, clearOpenCards, setFoundPairs, setIsFinished} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;