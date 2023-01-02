import * as S from './style';
import * as I from 'assets/svg';
import tokenService from 'utils/tokenService';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { createVideoModalAtom } from 'atoms';

function Header() {
  const [, setCreateVideoModal] = useRecoilState(createVideoModalAtom);

  const onCreateVideo = () => {
    setCreateVideoModal(true);
  };

  tokenService.setUser({
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJESUciLCJlbWFpbCI6Imp1d29uNzE2M0BuYXZlci5jb20iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyNjIxMjM4fQ.AiYGG-3rVHiL4_2JdQYlCSxoa2P_0Lrx-mnC3iMpKJA',
    refresh_token: '',
  });

  console.log(tokenService.getLocalAccessToken());

  return (
    <S.HeaderLayout>
      <span>
        <Link to={'/'}>
          <I.Logo />
        </Link>
        {!!tokenService.getLocalAccessToken() ? (
          <S.UserSection>
            <div onClick={onCreateVideo}>
              <I.AddVideo />
            </div>
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
