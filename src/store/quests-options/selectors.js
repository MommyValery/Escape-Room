import { StoreSlice } from '../../const';

export const getType = (state) => state[StoreSlice.QUESTS].type;
export const getPickedId = (state) => state[StoreSlice.QUESTS].pickedId;
