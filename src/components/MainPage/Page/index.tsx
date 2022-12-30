import * as S from './style';
import VideoBottomBar from '../Videos/BottomBar';
import Video from '../Videos/Video';
import VideoSideBar from '../Videos/SideBar';
import { useEffect, useState } from 'react';

function MainPage() {
  return (
    <S.MainPageLayout>
      <S.VideoSection>
        <Video />
        <VideoSideBar />
        <VideoBottomBar />
      </S.VideoSection>
      <S.Line />
      <S.VideoSection>
        <Video />
        <VideoSideBar />
        <VideoBottomBar />
      </S.VideoSection>
      <S.Line />
      <S.VideoSection>
        <Video />
        <VideoSideBar />
        <VideoBottomBar />
      </S.VideoSection>
      <S.Line />
    </S.MainPageLayout>
  );
}

export default MainPage;
