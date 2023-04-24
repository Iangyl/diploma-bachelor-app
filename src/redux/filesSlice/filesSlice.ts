import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { IFilesSlice } from './filesSlice.types';
import IResSearch from '@/src/interfaces/IResSearch';

const initialState: IFilesSlice = {
  allFiles: [],
  currentFile: null,
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setAllFiles: (state, action: PayloadAction<IResSearch[]>) => {
      state.allFiles = action.payload;
    },
    setCurrentFile: (state, action: PayloadAction<IResSearch>) => {
      state.currentFile = action.payload;
    },
  },
});

export const { setAllFiles, setCurrentFile } = filesSlice.actions;

export const selectCount = (state: RootState) => state.files;

export default filesSlice.reducer;
