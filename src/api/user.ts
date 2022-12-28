import AxiosInstance from 'lib/axiosInstance';
import { getUser } from 'utils/url';

class User {
  getUserInfo(name: string, token?: string) {
    try {
      return AxiosInstance(
        {
          method: 'GET',
          url: getUser.getUserInfo() + name,
        },
        token && token,
      );
    } catch (error) {
      return error;
    }
  }

  getUserVideos(name: string, type: string) {
    try {
      return AxiosInstance({
        method: 'GET',
        url: getUser.getUserInfo() + name + type,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
