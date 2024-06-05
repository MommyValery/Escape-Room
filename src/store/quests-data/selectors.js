import { StoreSlice } from '../../const';

export const getQuests = (state) => state[StoreSlice.DATA].quests;
export const getQuestById = (state) => state[StoreSlice.DATA].activeQuest;
