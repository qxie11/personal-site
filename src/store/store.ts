import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/mode";
import intlReducer from "./reducers/intl";
import modeToLocalStorage from "./middleware/modeToLocalStorage";

const rootReducer = combineReducers({
  mode: modeReducer,
  intl: intlReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [modeToLocalStorage],
});

export type RootState = ReturnType<typeof store.getState>;
