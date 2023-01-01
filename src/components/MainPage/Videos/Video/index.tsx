import React from 'react';
import { useEffect, useRef } from 'react';
import VideoBottomBar from '../BottomBar';
import VideoSideBar from '../SideBar';
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

  const onClick = () => {
    videoRef.current?.play();
  };

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <React.Fragment>
      <S.VideoSection>
        <S.Video
          ref={videoRef}
          className="player"
          src={Props.url}
          width="100%"
          height="100%"
          muted={false}
          controls={false}
          onClick={onClick}
        />
        <VideoSideBar id={Props.id} like={Props.like} dislike={Props.dislike} />
        <VideoBottomBar title={Props.title} tag={Props.tag} name={'오종진'} />
      </S.VideoSection>
      <S.Line />
    </React.Fragment>
  );
}

export default Video;
