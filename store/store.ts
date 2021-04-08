import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/mode";

const rootReducer = combineReducers({
    modeReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;