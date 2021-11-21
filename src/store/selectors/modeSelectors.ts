import { store } from '@store/store';
import { RootState } from '@store/store';
import { createSelector } from '@reduxjs/toolkit';

const selectState = (state: RootState = store.getState()) => state.mode;

const selectCurrentTheme = createSelector(
  selectState,
  (state) => state.isDarkMode
);

const modeSelectors = {
  selectCurrentTheme,
};

export default modeSelectors;
