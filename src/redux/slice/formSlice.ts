import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { FormCards } from '../../types';

const initialState: FormCards[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<FormCards>) => {
      state.push(action.payload);
    },
  },
});

export const { addForm } = formSlice.actions;

export default formSlice.reducer;
