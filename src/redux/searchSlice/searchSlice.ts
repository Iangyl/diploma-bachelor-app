import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { ISearchSlice } from './searchSlice.types';

const initialState: ISearchSlice = {
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = '';
    },
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;

export const selectCount = (state: RootState) => state.search;

export default searchSlice.reducer;
