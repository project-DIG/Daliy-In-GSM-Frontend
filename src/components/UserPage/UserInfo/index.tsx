import React from 'react';
import { UserInfoInterface } from 'types/user';
import * as S from './style';

interface Props {
  data: UserInfoInterface;
}

function UserInfoSection({ data }: Props) {
  return (
    <S.UserInfoSectionLayout>
      <S.UserProfile src={data.profile_image} />
      <S.UserValues>
        <S.UserName>{data.name}</S.UserName>
        <S.Follow>
          <S.FollowBox>
            <p className="key">팔로잉</p>
            <S.Value>{data.follow}</S.Value>
          </S.FollowBox>
          <S.FollowBox>
            <p className="key">팔로워</p>
            <S.Value>{data.follower}</S.Value>
          </S.FollowBox>
        </S.Follow>
      </S.UserValues>
    </S.UserInfoSectionLayout>
  );
}

export default UserInfoSection;
