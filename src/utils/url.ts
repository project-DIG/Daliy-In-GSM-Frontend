import { BASE_URL } from 'shared/config';

export const getAuth = {
  tokenReissuance: () => {
    return BASE_URL + 'signin/refresh';
  },
  confirmEmail: () => {
    return BASE_URL + 'signup/email';
  },
  confirmAuthenticationMail: () => {
    return BASE_URL + 'signup/email/check';
  },
  signup: () => {
    return BASE_URL + 'signup';
  },
};

export const getUser = {
  getUserInfo: () => {
    return BASE_URL + 'user/';
  },
};
