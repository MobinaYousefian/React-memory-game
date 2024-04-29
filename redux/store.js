import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {instructionsReducer} from "@/redux/features/instructionsSlice";
import {gameReducer} from "@/redux/features/gameSlice";

const rootReducer = combineReducers({
    instructions : instructionsReducer,
    game : gameReducer
});

export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
});