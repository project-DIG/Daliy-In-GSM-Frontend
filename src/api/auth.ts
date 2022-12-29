import AxiosInstance from 'lib/axiosInstance';
import { getAuth } from 'utils/url';

class Auth {
  getAuthenticationMail(email: string) {
    try {
      return AxiosInstance({
        method: 'Post',
        url: getAuth.confirmEmail(),
        data: {
          email: email + '@gsm.hs.kr',
        },
      });
    } catch (error) {
      return error;
    }
  }

  emailCheck(email: string, authenticationMail: string) {
    try {
      return AxiosInstance({
        method: 'Post',
        url: getAuth.confirmAuthenticationMail(),
        data: {
          email: email + '@gsm.hs.kr',
          code: authenticationMail,
        },
      });
    } catch (error) {
      return error;
    }
  }

  signup(name: string, password: string, email: string) {
    try {
      return AxiosInstance({
        method: 'Post',
        url: getAuth.signup(),
        data: {
          name: name,
          password: password,
          email: email + '@gsm.hs.kr',
        },
      });
    } catch (error) {
      return error;
    }
  }
  signin(email: string, password: string) {
    try {
      return AxiosInstance({
        method: 'Post',
        url: getAuth.signin(),
        data: {
          email: email + '@gsm.hs.kr',
          password: password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
