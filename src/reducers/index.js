import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import homepageReducer from './homepageReducer';
import responseReducer from './responseReducer';
import apiCallReducer from './apiCallReducer';

const reducers = combineReducers({
  modalReducer,
  homepageReducer,
  responseReducer,
  apiCallReducer
})

export default reducers;
