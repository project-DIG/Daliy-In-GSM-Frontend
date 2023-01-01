import * as S from './style';
import VideoBottomBar from '../Videos/BottomBar';
import Video from '../Videos/Video';
import VideoSideBar from '../Videos/SideBar';

function MainPage() {
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
