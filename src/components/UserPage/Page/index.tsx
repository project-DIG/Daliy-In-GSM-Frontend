import UserInfoSection from '../UserInfo';
import VideoSection from '../Video';
import * as S from './style';

function UserPage() {
  return (
    <S.UserPageLayout>
      <UserInfoSection />
      <S.FollowButton>팔로우</S.FollowButton>
      <VideoSection />
    </S.UserPageLayout>
  );
}

export default UserPage;
