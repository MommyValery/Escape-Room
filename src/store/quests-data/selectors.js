import { StoreSlice } from '../../const';

export const getQuests = (state) => state[StoreSlice.DATA].quests;
export const getQuestById = (state) => state[StoreSlice.DATA].activeQuest;
export const getIsQuestLoading = (state) => state[StoreSlice.DATA].isQuestLoading;
export const getAreQuestsLoading = (state) => state[StoreSlice.DATA].areQuestsLoading;
  