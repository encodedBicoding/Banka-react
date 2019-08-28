
const creatBankAccout = (requestType, data, dispatch, responseType, modalOPen) => {
  dispatch({type:requestType});
  const token = window.localStorage.getItem('__banka__token')
  const url = 'https://dominic-banka.herokuapp.com/api/v1/accounts';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then( resp => resp.json())
    .then(res => {
      if(res.status !== 200) {
        dispatch({ type: 'GLOBAL_RESPONSE', message: res.message, status: res.status});
      }
      dispatch({ type: responseType, data: res.data});
      dispatch({ type: modalOPen})
      dispatch({ type: 'GLOBAL_RESPONSE', message: res.message, status: res.status});
    })

}
export default creatBankAccout;
