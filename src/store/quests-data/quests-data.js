import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { fetchQuestById, fetchQuests } from '../action';

const initialState = {
  IsQuestDataLoading: false,
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
              state.isOffersDataLoading = false;
          })
          .addCase(fetchQuests.pending, (state) => {
              state.isOffersDataLoading = true;
          })
          .addCase(fetchQuests.rejected, (state) => {
              state.isOffersDataLoading = false;
          })
          .addCase(fetchQuestById.pending, (state) => {
              state.isOfferLoading = true;
          })
          .addCase(fetchQuestById.fulfilled, (state, action) => {
              state.activeQuest = action.payload;
              state.isOfferLoading = false;
          })
          .addCase(fetchQuestById.rejected, (state) => {
              state.isOfferLoading = false;
          });
  }
});
