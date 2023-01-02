import * as S from './style';
import Video from '../Videos/Video';
import { useCallback, useEffect, useRef, useState } from 'react';
import video from 'api/video';
import { useRecoilState } from 'recoil';
import { createVideoModalAtom } from 'atoms';
import CreateVideoModal from 'components/Modal/CreateVideo';
import { commentModalAtom } from 'atoms';
import CommentModal from 'components/Modal/CommentModal';
import React from 'react';

function MainPage() {
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const page = useRef<number>(1);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [response, setResponse] = useState<any[]>([]);
  const [commentModal] = useRecoilState(commentModalAtom);
  const [createVideoModal] = useRecoilState(createVideoModalAtom);

  const getVideos = useCallback(async () => {
    try {
      setIsLoad(true);
      const res: any = await video.getVideos(page.current, 5);
      setResponse(prevPosts => [...prevPosts, ...res.data.results]);
      setHasNextPage(res.data.results.length === 5);
      setIsLoad(false);

      if (res.data.results.length) {
        page.current += 1;
      }
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting && !isLoad) {
        getVideos();
      }
    });

    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasNextPage, getVideos, isLoad]);

  return (
    <>
      <S.MainPageLayout>
        {commentModal && <CommentModal />}
        {createVideoModal && <CreateVideoModal />}
        {response.map(value => (
          <Video
            key={value.id}
            id={value.id}
            title={value.title}
            tag={value.tag}
            like={value.like}
            dislike={value.dislike}
            uploader={value.uploader}
            url={value.video_url}
          />
        ))}
        <div ref={observerTargetEl} />
      </S.MainPageLayout>
    </>
  );
}

export default MainPage;
