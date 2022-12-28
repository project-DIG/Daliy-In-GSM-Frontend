import { useEffect, useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import user from 'api/user';
import ReactPlayer from 'react-player';

interface Props {
  name: string;
  isMine: boolean | undefined;
}

function VideoSection({ name, isMine }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [response, setResponse] = useState<any[]>([]);

  const getUserVideo = async (type: string) => {
    try {
      const res: any = await user.getUserVideos(name, type);
      setResponse(res.data?.videos);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserVideo('/video');
  }, []);

  const clickCategory = (idx: number, type: string) => {
    setActiveIndex(idx);
    getUserVideo(type);
  };

  return (
    <>
      <S.Category isMine={isMine}>
        {isMine ? (
          <>
            <S.Box
              onClick={() => clickCategory(0, '/video')}
              className={activeIndex === 0 ? 'active user' : ''}
            >
              <I.User />
              <S.BottomLine />
            </S.Box>
            <S.Box
              onClick={() => clickCategory(1, '/like')}
              className={activeIndex === 1 ? 'active like' : ''}
            >
              <I.Like />
              <S.BottomLine />
            </S.Box>
            <S.Box
              onClick={() => clickCategory(2, '/dislike')}
              className={activeIndex === 2 ? 'active dislike' : ''}
            >
              <I.DisLike />
              <S.BottomLine />
            </S.Box>
          </>
        ) : (
          <S.Box
            onClick={() => clickCategory(0, '/video')}
            className={activeIndex === 0 ? 'active user' : ''}
          >
            <I.User />
            <S.BottomLine />
          </S.Box>
        )}
      </S.Category>
      {response?.length === 0 ? (
        <S.VideoNotFound>아직 영상이 없어요 😯</S.VideoNotFound>
      ) : (
        <S.VideoSection>
          {response.map((item, index) => (
            <ReactPlayer
              key={item.id}
              className="react-player"
              url={item.video_url}
              width="100%"
              height="100%"
            />
          ))}
        </S.VideoSection>
      )}
    </>
  );
}

export default VideoSection;
