import { store } from "store/store";
import { RootState } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

import { INTL } from "shared/constants";
import RussianLocale from "intl/ru.locale.json";
import EnglishLocale from "intl/en.locale.json";

const selectState = (state: RootState = store.getState()) => state.intl;

const selectDefaultLanguage = createSelector(
  selectState,
  (state) => state.defaultLanguage
);

const selectCurrentLanguage = createSelector(
  selectState,
  (state) => state.currentLng
);

const selectMessages = createSelector(selectCurrentLanguage, (currentLng) => {
  switch (currentLng) {
    case INTL.ENGLISH:
      return EnglishLocale;
    case INTL.RUSSIAN:
      return RussianLocale;
  }
});

const intlSelectors = {
  selectDefaultLanguage,
  selectCurrentLanguage,
  selectMessages,
};

export default intlSelectors;
