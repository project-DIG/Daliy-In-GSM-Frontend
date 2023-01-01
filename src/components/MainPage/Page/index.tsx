import * as S from './style';
import Video from '../Videos/Video';
import VideoSideBar from '../Videos/SideBar';
import { useEffect, useState } from 'react';
import video from 'api/video';
import user from 'api/user';

function MainPage() {
  const [response, setResponse] = useState<any[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(false);
    const getVideos = async () => {
      const res: any = await video.getVideos();
      setResponse(res.data);
      setLoaded(true);
    };

    getVideos();
  }, []);
  return (
    <S.MainPageLayout>
      <S.MainBg>
        <S.VideoSection>
          <Video />
          <VideoSideBar />
          <VideoBottomBar />
        </S.VideoSection>
        <S.Line />
      </S.MainBg>
      <S.MainBg>
        <S.VideoSection>
          <Video />
          <VideoSideBar />
          <VideoBottomBar />
        </S.VideoSection>
        <S.Line />
      </S.MainBg>
      <S.MainBg>
        <S.VideoSection>
          <Video />
          <VideoSideBar />
          <VideoBottomBar />
        </S.VideoSection>
        <S.Line />
      </S.MainBg>
      <S.MainBg>
        <S.VideoSection>
          <Video />
          <VideoSideBar />
          <VideoBottomBar />
        </S.VideoSection>
        <S.Line />
      </S.MainBg>
    </S.MainPageLayout>
  );
}

export default MainPage;
