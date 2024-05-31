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

export const getTypeToFilter = createAction(Action.GET_TYPE, (type) => ({ payload: type }));
export const getIdQuest = createAction(Action.GET_ID_QUEST, (id) => ({ payload: id }));
export const resetState = createAction(Action.RESET_STATE);

export const fetchQuests = createAsyncThunk(
    Action.FETCH_QUESTS, 
    async () => {
        const response = await fetch(APIRoute.QUESTS);
        const {data} = await response.json();
        return data;
      }
);
  
export const fetchQuestById = createAsyncThunk(
    Action.FETCH_QUEST_BY_ID, 
    async (id) => {
        try {
            const { data } = await fetch(`${APIRoute.QUESTS}/${id}`);
            return data;
        } catch (error) {
            alert(error);
                //history.push(AppRoute.NotFound);
        }
    }
  );

export const pushOrder = createAsyncThunk(
    Action.PUSH_ORDER,
    async (data, api) => {
        try {
            const response = await api.post(APIRoute.ORDERS, data);
       return response.data;
    } catch (err) {
      console.error(err)
        }
    }
)
