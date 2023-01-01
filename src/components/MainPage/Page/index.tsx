import * as S from './style';
import Video from '../Videos/Video';
import { useEffect, useState } from 'react';
import video from 'api/video';
import { commentModalAtom } from 'atoms';
import CommentModal from 'components/CommentModal';
import { useRecoilState } from 'recoil';

function MainPage() {
  const [response, setResponse] = useState<any[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [commentModal, setCommentModal] = useRecoilState(commentModalAtom);

  useEffect(() => {
    setLoaded(false);
    const getVideos = async () => {
      const res: any = await video.getVideos();
      setResponse(res.data);
      setLoaded(true);
    };

    getVideos();
  }, []);
  return (
    <>
      {commentModal && <CommentModal />}
      <S.MainPageLayout>
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
