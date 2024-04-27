import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {instructionsReducer} from "@/redux/features/instructionsSlice";
import {startReducer} from "@/redux/features/startSlice";

const rootReducer = combineReducers({
    instructions : instructionsReducer,
    start : startReducer
});

export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
});