import { FETCH_ACCOUNTS, ACCOUNTS_FETCHED, SAVE_ACCOUNTS } from '../Actions/accountsActions';

const initialState = {
  isFetchingAccounts: false,
  accountsData: [],
}

const accountsReducer = (state = initialState, action) => {
  switch(action.type) {
  case FETCH_ACCOUNTS: 
    return {
      ...state,
      isFetchingAccounts: true,
    }
  case ACCOUNTS_FETCHED: 
    return {
      ...state,
      isFetchingAccounts: false
    }
  case SAVE_ACCOUNTS:
    return {
      ...state,
      accountsData: action.data,
    }
  default:
    return state
  }
}
export default accountsReducer;
