import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {instructionsReducer} from "@/redux/features/instructionsSlice";

const rootReducer = combineReducers({
    instructions : instructionsReducer
});

export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
});