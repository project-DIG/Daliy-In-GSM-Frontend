import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
import Input from 'components/Common/Input';
import { useForm } from 'react-hook-form';

export default function SignupPage() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
    console.log('hi');
  };
  const inValid = (error: any) => {
    console.log(error);
  };
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
        <form onSubmit={handleSubmit(onValid, inValid)}>
          <Input
            register={register('nickname', {
              required: '이름을 입력해주세요.',
              maxLength: {
                value: 10,
                message: '이름은 최대 10글자 입니다.',
              },
            })}
            type="text"
            placeholder="이름"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            register={register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            register={register('checkPassword', {
              required: '비밀번호를 확인해주세요.',
            })}
          />
          <S.EmailText>@gsm.hs.kr</S.EmailText>
          <Input
            register={register('email', {
              required: '이메일 입력해주세요.',
              maxLength: {
                value: 6,
                message: '이메일은 6글자입니다.',
              },
              minLength: {
                value: 6,
                message: '이메일은 6글자입니다.',
              },
            })}
          />
          <S.AuthenticationBox>
            <S.Input type="text" placeholder="인증번호" />
            <S.Check>확인</S.Check>
          </S.AuthenticationBox>
        </form>
        <S.SignBox>
          <S.SignWrap>
            <S.Signup>회원가입</S.Signup>
            <Link to="/signin">
              <S.Signin>로그인</S.Signin>
            </Link>
          </S.SignWrap>
          <I.LoginButton />
        </S.SignBox>
      </S.SignupSection>
    </S.SignupLayout>
  );
}
