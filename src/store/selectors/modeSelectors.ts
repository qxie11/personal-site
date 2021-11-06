import { RootState } from '@store/store';

const selectMode = (state: RootState) => state.mode;

const selectCurrentTheme = (state: RootState) => state.mode.isDarkMode;

const modeSelectors = {
  selectMode,
  selectCurrentTheme,
};

export default modeSelectors;
