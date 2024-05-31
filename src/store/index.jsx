import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { combineReducers } from 'redux';
import { StoreSlice } from '../const';
import { questsDataSlice } from './quests-data/quests-data';
import { questsOptionsSlice } from './quests-options/quests-options';

const rootReducer = combineReducers({
  [StoreSlice.DATA]: questsDataSlice.reducer,
  [StoreSlice.QUESTS]: questsOptionsSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    //composeWithDevTools(
    //    applyMiddleware(thunk.withExtraArgument(api)),
    //  ),
  });
  
 const api = createAPI(() => store.dispatch());