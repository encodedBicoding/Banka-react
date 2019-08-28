import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import homepageReducer from './homepageReducer';
import responseReducer from './responseReducer';
import apiCallReducer from './apiCallReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  modalReducer,
  homepageReducer,
  responseReducer,
  apiCallReducer,
  authReducer
})

export default reducers;
