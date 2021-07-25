import { createAction, PrepareAction } from "@reduxjs/toolkit";

export const changeMode = createAction(
  'CHANGE_MODE',
  (payload?: boolean) => ({payload})
);