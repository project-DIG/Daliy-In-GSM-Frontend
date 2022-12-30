import React from 'react';
import * as S from './style';
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function FollowButton({ children, ...rest }: Props) {
  return <S.FollowButton {...rest}>{children}</S.FollowButton>;
}

export default FollowButton;
