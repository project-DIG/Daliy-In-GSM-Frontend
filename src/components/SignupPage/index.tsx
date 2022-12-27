import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
import Input from 'components/Common/Input';
export default function SignupPage() {
  return (
    <S.SignupLayout>
      <S.SignupSection>
        <Link to="/">
          <I.Back />
        </Link>
        <S.LetsStart>
          Let's
          <br />
          Start!
        </S.LetsStart>
        <span>
          <Input type="text" placeholder="이름" />
          <Input type="password" placeholder="비밀번호" />
          <Input type="password" placeholder="비밀번호 확인" />
          <S.EmailText>@gsm.hs.kr</S.EmailText>
          <Input />
          <S.AuthenticationBox>
            <S.Input type="text" placeholder="인증번호" />
            <S.Check>확인</S.Check>
          </S.AuthenticationBox>
        </span>
        <S.SignBox>
          <S.SignWrap>
            <S.Signup>회원가입</S.Signup>
            <S.Signin>로그인</S.Signin>
          </S.SignWrap>
          <I.LoginButton />
        </S.SignBox>
      </S.SignupSection>
    </S.SignupLayout>
  );
}
