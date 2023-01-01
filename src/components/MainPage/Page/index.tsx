import * as S from './style';
import VideoBottomBar from '../Videos/BottomBar';
import Video from '../Videos/Video';
import VideoSideBar from '../Videos/SideBar';
import { useEffect, useState } from 'react';
import { FullPage, Slide } from 'react-full-page';
function MainPage() {
  return (
    <S.MainPageLayout>
      <FullPage>
        <Slide>
          <S.MainBg>
            <S.VideoSection>
              <Video />
              <VideoSideBar />
              <VideoBottomBar />
            </S.VideoSection>
            <S.Line />
          </S.MainBg>
        </Slide>
        <Slide>
          <S.MainBg>
            <S.VideoSection>
              <Video />
              <VideoSideBar />
              <VideoBottomBar />
            </S.VideoSection>
            <S.Line />
          </S.MainBg>
        </Slide>
        <Slide>
          <S.MainBg>
            <S.VideoSection>
              <Video />
              <VideoSideBar />
              <VideoBottomBar />
            </S.VideoSection>
            <S.Line />
          </S.MainBg>
        </Slide>
        <Slide>
          <S.MainBg>
            <S.VideoSection>
              <Video />
              <VideoSideBar />
              <VideoBottomBar />
            </S.VideoSection>
            <S.Line />
          </S.MainBg>
        </Slide>
      </FullPage>
    </S.MainPageLayout>
  );
}

export default MainPage;
