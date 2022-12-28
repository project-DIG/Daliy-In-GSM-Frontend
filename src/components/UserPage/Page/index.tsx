import { useEffect, useState } from 'react';
import UserInfoSection from '../UserInfo';
import VideoSection from '../Video';
import * as S from './style';
import * as I from 'assets/svg';
import Skeleton from '../Skeleton';
import { useParams } from 'react-router-dom';
import user from 'api/user';
import tokenService from 'utils/tokenService';
import { UserInfoInterface } from 'types/user';

function UserPage() {
  const [isMine, setIsMine] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [response, setResponse] = useState<UserInfoInterface>();
  const params = useParams();

  useEffect(() => {
    console.log(params.user_name);

    const getUesrInfo = async () => {
      setLoaded(true);
      try {
        const res: any = await user.getUserInfo(
          String(params.user_name),
          tokenService.getLocalAccessToken(),
        );
        setResponse(res.data);
        setLoaded(false);
        console.log(res);
      } catch (e: any) {
        console.log(e);
      }
    };

    getUesrInfo();
  }, [params.user_name]);
  return (
    <S.UserPageLayout>
      {loaded ? (
        <Skeleton />
      ) : (
        <>
          <UserInfoSection data={response!} />
          {isMine ? (
            <S.FollowButton>
              <I.EditProfile />
            </S.FollowButton>
          ) : (
            <S.FollowButton>팔로우</S.FollowButton>
          )}
          <VideoSection isMine={response?.is_mine} />
        </>
      )}
    </S.UserPageLayout>
  );
}

export default UserPage;
