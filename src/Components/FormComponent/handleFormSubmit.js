import store from '../../store';

const baseUrl = 'https://dominic-banka.herokuapp.com/api/v1';


const handleFormSubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const arr = [];
  Array.from(e.target.children).forEach(child => {
    if (
      child.className === 'form-input' &&
        child.children[0].name !== 'confirm password'
    ) {
      arr.push({
        name: child.children[0].name,
        value: child.children[0].value
      });
    }
  });
  const user = arr.reduce((prev, curr) => {
    prev[curr['name']] = curr['value'];
    return prev;
  }, {});
  return submitData(arr.length, user);
};

const submitData = (arrLengthValue, payload) => {
  // Sign up
  if(arrLengthValue > 2) {
    store.dispatch({type: 'SIGNUP_LOADING'})
    fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(payload)
    }).then(resp => resp.json())
      .then(res => {
        store.dispatch({ type: 'PROMISE_RETURNED'});
        if(res.status !== 201) {
          store.dispatch({type: 'GLOBAL_RESPONSE', message: res.message, status: res.status})
        }
        store.dispatch({ type: 'GLOBAL_RESPONSE', message: res.message, status: res.status})
        window.sessionStorage.__banka__token = res.data.token;
        window.sessionStorage.__banka__user__name = res.data.userObj.firstname;
      })
  }
  if (arrLengthValue === 2) {
    store.dispatch({ type: 'LOGIN_LOADING'});
    fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then( resp => resp.json())
      .then(res => {
        store.dispatch({ type: 'PROMISE_RETURNED'});
        if(res.status !== 200) {
          store.dispatch({ type: 'GLOBAL_RESPONSE', message: res.message, status: res.status})
        }
        store.dispatch({ type: 'GLOBAL_RESPONSE', message: res.message, status: res.status})
        window.sessionStorage.__banka__token = res.data.token;
        window.sessionStorage.__banka__user__name = res.data.userObj.firstname;
      })
  }

}
export default handleFormSubmit;
