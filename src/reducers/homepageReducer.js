import { SET_TITLE } from '../Actions/homepageActions';
const initialState = {
  title: {
    component:'',
    value:''
  }
};
const homepageReducer = (state=initialState, action) => {
  switch(action.type) {
  case SET_TITLE:
    return {
      ...state,
      title: {
        ...state.title,
        component: action.component,
        value: action.value 
      }
    }
  default:
    return state
  }
};
export default homepageReducer;
