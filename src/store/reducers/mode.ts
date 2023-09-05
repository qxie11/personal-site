import { createSlice } from "@reduxjs/toolkit";

interface State {
  isDarkMode: boolean;
}

const initialState: State = {
  isDarkMode: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    switchMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setMode(state, action) {
      state.isDarkMode = action.payload;
    },
  },
});

export const { switchMode, setMode } = modeSlice.actions;
export default modeSlice.reducer;
