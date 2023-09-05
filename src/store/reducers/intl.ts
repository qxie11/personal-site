import { createSlice } from "@reduxjs/toolkit";
import { INTL } from "shared/constants";

interface State {
  defaultLanguage: undefined | string;
  currentLng: string;
}

const initialState: State = {
  defaultLanguage: undefined,
  currentLng: INTL.RUSSIAN,
};

const intlSlice = createSlice({
  name: "intl",
  initialState,
  reducers: {
    setDefaultLng(state, action) {
      state.defaultLanguage = action.payload;
    },
    changeCurrentLng(state, action) {
      state.currentLng = action.payload;
      localStorage.setItem("currentLng", action.payload);
    },
  },
});

export const { setDefaultLng, changeCurrentLng } = intlSlice.actions;
export default intlSlice.reducer;
