import { createReducer } from "@reduxjs/toolkit";
import { changeMode } from "../actions/mode";

interface State {
    isDarkMode: boolean;
}

const initialState: State = {
    isDarkMode: true,
}

export default createReducer(initialState, {
    [changeMode.type]: function (state) {
        state.isDarkMode = !state.isDarkMode;
    }
});