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

  useEffect(() => {
    console.log(videoRef.current);
  }, []);

  return (
    <S.VideoLayout>
      <S.VideoBox>
        <S.Video
          id="scrollArea"
          ref={videoRef}
          className="player"
          src={Props.url}
          width="100%"
          height="100%"
          muted={true} // 자동 재생 on
          controls={false} // 플레이어 컨트롤 노출 여부
        />
        <VideoSideBar id={Props.id} like={Props.like} dislike={Props.dislike} />
        <VideoBottomBar title={Props.title} tag={Props.tag} />
      </S.VideoBox>
      <S.Line />
    </S.VideoLayout>
  );
}

export default Video;
