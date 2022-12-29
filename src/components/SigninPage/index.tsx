import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
import Input from 'components/Common/Input';
import { useForm } from 'react-hook-form';
import { SigninInterface } from 'types/auth';
export default function SigninPage() {
  const { register, handleSubmit } = useForm<SigninInterface>();
  const onValid = (data: SigninInterface) => {
    console.log(data);
  };
  const inValid = (error: any) => {
    console.log(error);
  };
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
      <S.SigninBox onSubmit={handleSubmit(onValid, inValid)}>
        <S.EmailText>@gsm.hs.kr</S.EmailText>
        <Input
          register={register('email', {
            required: '이메일을 입력해주세요.',
          })}
          type="text"
          email={true}
        />
        <Input type="password" placeholder="비밀번호" />
        <span>
          <S.SignWrap>
            <S.Signin>로그인</S.Signin>
            <Link to="/signup_email">
              <S.Signup>회원가입</S.Signup>
            </Link>
          </S.SignWrap>
          <button>
            <I.LoginButton />
          </button>
        </span>
      </S.SigninBox>
    </S.SigninLayout>
  );
}
