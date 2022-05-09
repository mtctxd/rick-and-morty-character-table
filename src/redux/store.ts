import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { appSlice } from './appSlice';

const rootReducer = combineReducers({
  appSlice: appSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
