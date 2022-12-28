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
}

export default new Auth();
