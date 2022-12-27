import { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';

function VideoSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <S.Category>
        <S.Box
          onClick={() => setActiveIndex(0)}
          className={activeIndex === 0 ? 'active user' : ''}
        >
          <I.User />
          <S.BottomLine />
        </S.Box>
        <S.Box
          onClick={() => setActiveIndex(1)}
          className={activeIndex === 1 ? 'active like' : ''}
        >
          <I.Like />
          <S.BottomLine />
        </S.Box>
        <S.Box
          onClick={() => setActiveIndex(2)}
          className={activeIndex === 2 ? 'active dislike' : ''}
        >
          <I.DisLike />
          <S.BottomLine />
        </S.Box>
      </S.Category>
      <S.VideoSection />
    </>
  );
}

export default VideoSection;
