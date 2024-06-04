import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { fetchQuestById, fetchQuests } from '../action';

const initialState = {
  areQuestsLoading: false,
  isQuestLoading: false,
quests: [],
  activeQuest: {}
};

export const questsDataSlice = createSlice({
  name: StoreSlice.DATA,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
      builder
          .addCase(fetchQuests.fulfilled, (state, action) => {
              state.quests = action.payload;
              state.areQuestsLoading = false;
          })
          .addCase(fetchQuests.pending, (state) => {
            state.areQuestsLoading = true;
          })
          .addCase(fetchQuests.rejected, (state) => {
            state.areQuestsLoading = false;
          })
          .addCase(fetchQuestById.pending, (state) => {
              state.isQuestLoading = true;
          })
          .addCase(fetchQuestById.fulfilled, (state, action) => {
              state.activeQuest = action.payload;
              state.isQuestLoading = false;
          })
          .addCase(fetchQuestById.rejected, (state) => {
              state.isQuestLoading = false;
          });
  }
});
