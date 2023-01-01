import React from 'react';
import * as S from './style';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <S.LayoutWrapper>
      <S.BackGroundImage src="/images/bg.png" />
      <S.StyledLayout>{children}</S.StyledLayout>
    </S.LayoutWrapper>
  );
}

export default Layout;
