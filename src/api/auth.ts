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
}

export default new Auth();
