import AxiosInstance from 'lib/axiosInstance';
import { BASE_URL } from 'shared/config';
import { getVideo } from 'utils/url';

class Video {
  getVideos() {
    try {
      return AxiosInstance({
        baseURL: BASE_URL.ABOUT_VIDEO,
        url: getVideo.getVideos(),
        method: 'GET',
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Video();
