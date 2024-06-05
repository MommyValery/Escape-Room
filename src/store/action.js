import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { APIRoute} from '../const';

export const Action = {
  FETCH_QUESTS: 'quests/fetch',
  GET_TYPE: 'quests/getType',
  GET_ID_QUEST: 'detailed-quest/getId',
  FETCH_QUEST_BY_ID: 'detailed-quest/fetch',
  PUSH_ORDER: 'detailed-quest/order',
  RESET_STATE: 'quests/resetState'
};
  
export const fetchQuests = createAsyncThunk(
  Action.FETCH_QUESTS, 
  async (api) => {
    const {data}  = await api.get(APIRoute.QUESTS);
    return data;
  }  
);

export const getTypeToFilter = createAction(Action.GET_TYPE, (filter) => ({ payload: filter }));
export const getIdQuest = createAction(Action.GET_ID_QUEST, (id) => ({ payload: id }));
export const resetState = createAction(Action.RESET_STATE);
  
export const fetchQuestById = createAsyncThunk(
  Action.FETCH_QUEST_BY_ID, 
  async (id, {extra: api}) => {
    try {
      const { data } = await api.get(`${APIRoute.QUESTS}/${id}`);
      return data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const pushOrder = createAsyncThunk(
  Action.PUSH_ORDER,
  async (data, {extra: api}) => {
    try {
      const response = await api.post(APIRoute.ORDERS, data);
      return response.data;
    } catch (err) {
      console.log(err.response)
    }
  }
);
