import * as S from './style';
import Video from '../Videos/Video';
import { useEffect, useState } from 'react';
import video from 'api/video';
import { useRecoilState } from 'recoil';
import { createVideoModalAtom } from 'atoms';
import CreateVideoModal from 'components/Modal/CreateVideo';
import { commentModalAtom } from 'atoms';
import CommentModal from 'components/Modal/CommentModal';

function MainPage() {
  const [response, setResponse] = useState<any[]>([]);
  const [commentModal] = useRecoilState(commentModalAtom);
  const [createVideoModal] = useRecoilState(createVideoModalAtom);

  useEffect(() => {
    const getVideos = async () => {
      const res: any = await video.getVideos();
      setResponse(res.data);
    };

    getVideos();
  }, []);
  return (
    <>
      {commentModal && <CommentModal />}
      <S.MainPageLayout>
        {createVideoModal && <CreateVideoModal />}
        <>
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
        </>
      </S.MainPageLayout>
    </>
  );
}

export default MainPage;
