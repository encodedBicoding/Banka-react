import jwtDecode from 'jwt-decode';

export const decodeToken = (token) => {
  return jwtDecode(token);
}

export const getToken = () => {
  return localStorage.getItem('__banka__token');
}

