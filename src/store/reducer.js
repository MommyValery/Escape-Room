import { questsOptionsSlice } from './quests-options/quests-options';
import { questsDataSlice } from './quests-data/quests-data';
import { combineReducers } from '@reduxjs/toolkit';
import { StoreSlice } from 'const';

export const rootReducer = combineReducers({
  [StoreSlice.DATA]: questsDataSlice.reducer,
  [StoreSlice.QUESTS]: questsOptionsSlice.reducer,
});
  