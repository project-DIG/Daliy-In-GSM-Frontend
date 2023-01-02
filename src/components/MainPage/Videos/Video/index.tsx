import { useEffect, useRef } from 'react';
import VideoBottomBar from '../Bar/BottomBar';
import VideoSideBar from '../Bar/SideBar';
import * as S from './style';

interface VideoProps {
  id: number;
  title: string;
  uploader: number;
  like: number;
  dislike: number;
  url: string;
  tag: string;
}

function Video({ ...Props }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <S.VideoLayout>
      <S.VideoBox>
        <S.Video
          ref={videoRef}
          className="player"
          src={Props.url}
          width="100%"
          height="100%"
          muted={false}
          controls={false}
        />
        <VideoSideBar id={Props.id} like={Props.like} dislike={Props.dislike} />
        <VideoBottomBar title={Props.title} tag={Props.tag} />
      </S.VideoBox>
      <S.Line />
    </S.VideoLayout>
  );
}

export default Video;
