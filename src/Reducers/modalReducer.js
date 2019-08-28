import { SIGNUP_MODAL, LOGIN_MODAL, CLOSE_MODAL, CREATE_ACCOUNT_MODAL} from '../Actions/modalActions';
const initialState = {
  modal: '',
  path: ''
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
      modal: 'LOGIN',
      path: action.path ? action.path : undefined
    }
  case CREATE_ACCOUNT_MODAL:
    return {
      ...state,
      modal: 'CREATE_ACCOUNT'
    }
  case CLOSE_MODAL:
    return {
      ...state,
      modal: '',
      path: undefined
    }
  default:
    return state
  }
}

export default modalReducer;
