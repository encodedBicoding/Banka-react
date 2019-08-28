import { 
  SIGNUP_LOADING, 
  LOGIN_LOADING, 
  PROMISE_RETURNED, 
  BANK_ACCOUNT_CREATE_LOADING,
  BANK_ACCOUNT_CREATE_RESPONSE 
} from '../Actions/userActions';

const initialState = {
  isFetching: false,
  isCreatingBankAccount: false,
  response: {}
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
      isFetching: false,
      isCreatingBankAccount: false
    }
  case BANK_ACCOUNT_CREATE_LOADING:
    return {
      ...state,
      isCreatingBankAccount: true
    }
  case BANK_ACCOUNT_CREATE_RESPONSE:
    return {
      ...state,
      isCreatingBankAccount: false,
      response: action.data
    }
  default:
    return state
  }
}

export default apiCallReducer;
