import { fetchQuests, fetchQuestById } from './action';
import { APIRoute } from 'const';

export const fetchQuestList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTS)
    .then(({data}) => dispatch(fetchQuests(data.map((quest) => quest))))
);

export const fetchQuestById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.QUEST_BY_ID}${id}`)
    .then(({data}) => dispatch(fetchQuestById(data)))
);

export const pushOrder = (name, peopleCount, phone, isLegal) => (dispatch, _getState, api) => (
  api.post(APIRoute.ORDERS, {name, peopleCount, phone, isLegal})
    .catch((err) => {
      alert(`Something wrong, please try again :( This error is ${err}...`);
    })
);