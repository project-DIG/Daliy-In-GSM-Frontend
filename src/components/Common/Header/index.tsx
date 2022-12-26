import * as S from './style';
import * as I from 'assets/svg';
import tokenService from 'utils/tokenService';

function Header() {
  return (
    <S.HeaderLayout>
      <I.Logo />
      {!!tokenService.getLocalAccessToken() ? (
        <S.UserSection>
          <I.AddVideo />
          <S.ProfileImage src="/images/background.png" />
        </S.UserSection>
      ) : (
        <S.Login>로그인</S.Login>
      )}
    </S.HeaderLayout>
  );
}

export default Header;
