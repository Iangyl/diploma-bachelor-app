import { configureStore } from '@reduxjs/toolkit';
import filesReducer from './filesSlice/filesSlice';
import searchReducer from './searchSlice/searchSlice';

export const store = configureStore({
  reducer: {
    files: filesReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
