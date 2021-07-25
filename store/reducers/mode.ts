import { createReducer } from "@reduxjs/toolkit";
import { changeMode } from "../actions/mode";

interface State {
    isDarkMode: boolean;
}

const initialState: State = {
    isDarkMode: false,
}

export default createReducer(initialState, {
    [changeMode.type]: function (state, { payload }) {
        state.isDarkMode = payload ?? !state.isDarkMode;
        localStorage.setItem('theme', state.isDarkMode.toString());
    }
});