import { SIGNUP_LOADING, LOGIN_LOADING, PROMISE_RETURNED } from '../Actions/userActions';

const initialState = {
  isFetching: false
}

const apiCallReducer = (state = initialState, action) => {
  switch(action.type) {
  case SIGNUP_LOADING:
    return {
      ...state,
      isFetching: true,
    }
  case LOGIN_LOADING:
    return {
      ...state,
      isFetching: true,
    }
  case PROMISE_RETURNED:
    return {
      ...state,
      isFetching: false
    }
  default:
    return state
  }
}

export default apiCallReducer;
