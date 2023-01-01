import * as S from './style';
import * as I from 'assets/svg';
import tokenService from 'utils/tokenService';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.HeaderLayout>
      <span>
        <Link to={'/'}>
          <I.Logo />
        </Link>
        {!!tokenService.getLocalAccessToken() ? (
          <S.UserSection>
            <I.AddVideo />
            <S.ProfileImage src="/images/background.png" />
          </S.UserSection>
        ) : (
          <Link to={'/signin'}>
            <S.Login>로그인</S.Login>
          </Link>
        )}
      </span>
    </S.HeaderLayout>
  );
}

export default Header;
