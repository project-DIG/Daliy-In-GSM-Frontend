import { useEffect, useRef } from 'react';
import * as S from './style';

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onClick = () => {
    videoRef.current?.play();
  };

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <S.Video
      ref={videoRef}
      className="player"
      src={'https://gcinside.s3.ap-northeast-2.amazonaws.com/IMG_0981.MOV'}
      width="100%"
      height="100%"
      muted={false}
      controls={false}
      onClick={onClick}
    />
  );
}

export default Video;
