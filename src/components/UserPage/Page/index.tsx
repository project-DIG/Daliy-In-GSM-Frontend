import { useState } from 'react';
import UserInfoSection from '../UserInfo';
import VideoSection from '../Video';
import * as S from './style';
import * as I from 'assets/svg';
import Skeleton from '../Skeleton';

function UserPage() {
  const [isMine, setIsMine] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(true);
  return (
    <S.UserPageLayout>
      {loaded ? (
        <Skeleton />
      ) : (
        <>
          <UserInfoSection />
          {isMine ? (
            <S.FollowButton>
              <I.EditProfile />
            </S.FollowButton>
          ) : (
            <S.FollowButton>팔로우</S.FollowButton>
          )}
          <VideoSection />
        </>
      )}
    </S.UserPageLayout>
  );
}

export default UserPage;
