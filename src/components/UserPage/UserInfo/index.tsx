import React from 'react';
import * as S from './style';

function UserInfoSection() {
  return (
    <S.UserInfoSectionLayout>
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
    </S.UserInfoSectionLayout>
  );
}

export default UserInfoSection;
