import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_TYPE, StoreSlice } from '../../const';
import { getIdQuest, getTypeToFilter, resetState } from 'store/action';
  
const initialState = {
  type: DEFAULT_TYPE,
  pickedId: 0
};

export const questsOptionsSlice = createSlice({
  name: StoreSlice.QUESTS,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getTypeToFilter, (state, action) => {
        state.type = action.payload;
      })
      .addCase(getIdQuest, (state, action) => {
        state.pickedId = action.payload;
      })          
      .addCase(resetState, (state) => {
        state.type = initialState.type;
      });
  }
});
