import { BASE_URL } from 'shared/config';

export const getAuth = {
  tokenReissuance: () => {
    return BASE_URL.ABOUT_USER + 'signin/refresh';
  },
  confirmEmail: () => {
    return BASE_URL.ABOUT_USER + 'signup/email';
  },
  confirmAuthenticationMail: () => {
    return BASE_URL.ABOUT_USER + 'signup/email/check';
  },
  signup: () => {
    return BASE_URL.ABOUT_USER + 'signup';
  },
};

export const getUser = {
  getUserInfo: () => {
    return BASE_URL.ABOUT_USER + 'user/';
  },
};
