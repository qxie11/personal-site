import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modeReducer from './reducers/mode';
import modeToLocalStorage from './middleware/modeToLocalStorage';

const rootReducer = combineReducers({
  mode: modeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [modeToLocalStorage],
});

export type RootState = ReturnType<typeof store.getState>;
