import { getQuests } from 'store/quests-data/selectors';
import { StoreSlice } from '../../const';
import { createSelector } from '@reduxjs/toolkit';

export const getType = (state) => state[StoreSlice.QUESTS].type;
export const getPickedId = (state) => state[StoreSlice.QUESTS].pickedId;
 
export const getFilteredQuests = createSelector(
  [getType, getQuests],
  (activeType, quests) => quests.filter((quest) => quest.type === activeType.type)
);