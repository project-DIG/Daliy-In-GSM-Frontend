import * as S from './style';
import * as I from '../../../assets/svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Input from 'components/Common/Input';

export default function SignupEmailPage() {
  const { register, handleSubmit } = useForm();
  const [isError, setIsError] = useState(false);
  const onValid = (data: any) => {
    setIsError(false);
    console.log(data);
    console.log('hi');
  };
  const inValid = (error: any) => {
    setIsError(true);
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
          <S.AuthenticationBox>
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
              email={true}
              type="text"
              isError={isError}
            />
            <S.Input
              register={register('email', {
                required: '인증메일을 확인해주세요',
                maxLength: {
                  value: 6,
                  message: '인증메일은 6글자 입니다',
                },
                minLength: {
                  value: 6,
                  message: '인증메일은 6글자 입니다',
                },
              })}
              type="text"
              placeholder="인증번호"
              isError={isError}
            />
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
