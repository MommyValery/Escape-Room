import { StoreSlice } from '../../const';

export const getType = (state) => state[StoreSlice.QUESTS].type;
export const getPickedId = (state) => state[StoreSlice.QUESTS].pickedId;
export const getFiltredQuests = (state) => state[StoreSlice.DATA].quests
  .filter((quest) => quest.type === state[StoreSlice.QUESTS].type);