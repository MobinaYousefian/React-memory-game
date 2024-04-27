import {createSlice} from "@reduxjs/toolkit";

export const instructionsSlice = createSlice ({
    name : "instructions",
    initialState : {
        isOpen : false
    },
    reducers : {
        triggerInstructions : (state) => {
            state.isOpen = !state.isOpen
        },
    }
});

export const {triggerInstructions} = instructionsSlice.actions;
export const instructionsReducer = instructionsSlice.reducer;