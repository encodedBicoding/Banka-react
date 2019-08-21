import { SIGNUP_MODAL, LOGIN_MODAL, CLOSE_MODAL} from '../Actions/modalActions';
const initialState = {
  modal: ''
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
  case SIGNUP_MODAL:
    return {
      ...state,
      modal: 'SIGNUP'
    }
  case LOGIN_MODAL:
    return {
      ...state,
      modal: 'LOGIN'
    }
  case CLOSE_MODAL:
    return {
      ...state,
      modal: ''
    }
  default:
    return state
  }
}

export default modalReducer;
