import { START_SESSION, END_SESSION} from '../Actions/userActions';

const initialState = {
  isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
  case START_SESSION:
    return {
      ...state,
      isLoggedIn: true,
    }
  case END_SESSION: 
    return {
      ...state,
      isLoggedIn: false,
    }
  default:
    return state  
  }
}

export default authReducer;

