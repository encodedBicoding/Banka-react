import { GLOBAL_RESPONSE, CLOSE_GLOBAL_RESPONSE } from '../Actions/responseActions';
import store from '../store';

const initialState = {
  isGlobalResponse: false,
  message: '',
  status: 0,
  errorState: 'non-active'
};
const responseReducer = (state = initialState, action) => {
  switch(action.type) {
  case GLOBAL_RESPONSE:
    setTimeout(()=>{
      store.dispatch({ type: CLOSE_GLOBAL_RESPONSE})
    }, 2000)
    return {
      ...state,
      isGlobalResponse: true,
      message: action.message,
      status: action.status,
      errorState: 'active'
    }
  case CLOSE_GLOBAL_RESPONSE:
    return {
      ...state,
      errorState: 'non-active'
    }
  default:
    return state
  }
};
export default responseReducer;
