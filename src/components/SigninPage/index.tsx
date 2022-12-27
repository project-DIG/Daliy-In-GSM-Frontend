import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
import Input from 'components/Common/Input';
export default function SigninPage() {
  return (
    <S.SigninLayout>
      <S.SigninSection>
        <Link to="/">
          <I.Back />
        </Link>
        <S.WelcomeBack>
          Welcome
          <br />
          Back!
        </S.WelcomeBack>
        <p>돌아오신걸 환영해요!</p>
      </S.SigninSection>
      <S.SigninBox>
        <S.EmailText>@gsm.hs.kr</S.EmailText>
        <Input type="text" />
        <Input type="password" placeholder="비밀번호" />
        <span>
          <S.SignWrap>
            <S.Signin>로그인</S.Signin>
            <Link to="/signup">
              <S.Signup>회원가입</S.Signup>
            </Link>
          </S.SignWrap>
          <I.LoginButton />
        </span>
      </S.SigninBox>
    </S.SigninLayout>
  );
}
