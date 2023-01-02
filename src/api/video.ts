import AxiosInstance from 'lib/axiosInstance';
import { BASE_URL } from 'shared/config';
import tokenService from 'utils/tokenService';
import { getVideo } from 'utils/url';

class Video {
  getVideos(page: number, size: number) {
    try {
      return AxiosInstance({
        baseURL: BASE_URL.ABOUT_VIDEO,
        url: getVideo.getVideos(),
        method: 'GET',
        params: {
          page: page,
          size: size,
        },
      });
    } catch (error) {
      return error;
    }
  }

  createVideo(title: string, file: FormData) {
    try {
      return AxiosInstance(
        {
          baseURL: BASE_URL.ABOUT_VIDEO,
          url: getVideo.getVideos(),
          method: 'POST',
          data: {
            title: title,
            file: file,
            tag: '.',
          },
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
        tokenService.getLocalAccessToken(),
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Video();
