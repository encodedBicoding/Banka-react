import store from '../store';
import { decodeToken, getToken } from '../utils';
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const ACCOUNTS_FETCHED = 'ACCOUNTS_FETCHED';
export const SAVE_ACCOUNTS = 'SAVE_ACCOUNTS';

const baseUrl = 'https://dominic-banka.herokuapp.com/api/v1'

export const getAllAccounts = () => {
  const { dispatch } = store;
  dispatch({ type: FETCH_ACCOUNTS });
  const encryptedToken = getToken();
  const payload = decodeToken(encryptedToken);
  const email = payload.email;
  fetch(`${baseUrl}/user/${email}/accounts`, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${encryptedToken}`
      }
    }).then(resp => resp.json())
    .then(res => {
      dispatch({ type: ACCOUNTS_FETCHED});
      console.log(res);
      const { data } = res;
      dispatch({ type: SAVE_ACCOUNTS, data});
    })
} 
