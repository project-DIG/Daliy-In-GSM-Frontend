import { useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';

function UserPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <S.UserPageLayout>
      <S.UserInfoSection>
        <S.UserProfile src="/images/background.png" />
        <S.UserValues>
          <S.UserName>오종진입니다</S.UserName>
          <S.Follow>
            <S.FollowBox>
              <p className="key">팔로잉</p>
              <S.Value>102</S.Value>
            </S.FollowBox>
            <S.FollowBox>
              <p className="key">팔로워</p>
              <S.Value>102</S.Value>
            </S.FollowBox>
          </S.Follow>
        </S.UserValues>
      </S.UserInfoSection>
      <S.FollowButton>팔로우</S.FollowButton>
      <S.Category>
        <S.Box
          onClick={() => setActiveIndex(0)}
          className={activeIndex === 0 ? 'active user' : ''}
        >
          <I.User isActive={true} />
          <S.BottomLine />
        </S.Box>
        <S.Box
          onClick={() => setActiveIndex(1)}
          className={activeIndex === 1 ? 'active like' : ''}
        >
          <I.Like isActive={true} />
          <S.BottomLine />
        </S.Box>
        <S.Box
          onClick={() => setActiveIndex(2)}
          className={activeIndex === 2 ? 'active dislike' : ''}
        >
          <I.DisLike isActive={true} />
          <S.BottomLine />
        </S.Box>
      </S.Category>
      <S.VideoSection />
    </S.UserPageLayout>
  );
}

export default UserPage;
