import { useState } from 'react';
import UserInfoSection from '../UserInfo';
import VideoSection from '../Video';
import * as S from './style';

function UserPage() {
  const [isMine, setIsMine] = useState<boolean>(false);
  return (
    <S.UserPageLayout>
      <UserInfoSection />
      {isMine ? (
        <S.FollowButton></S.FollowButton>
      ) : (
        <S.FollowButton>팔로우</S.FollowButton>
      )}
      <VideoSection />
    </S.UserPageLayout>
  );
}

export default UserPage;
