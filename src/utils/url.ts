import { BASE_URL } from 'shared/config';

export const getAuth = {
  tokenReissuance: () => {
    return BASE_URL + 'signin/refresh';
  },
};

export const getUser = {
  getUserInfo: () => {
    return BASE_URL + 'user/';
  },
};
