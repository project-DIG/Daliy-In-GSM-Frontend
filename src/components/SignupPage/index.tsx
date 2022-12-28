import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
import Input from 'components/Common/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function SignupPage() {
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
            isError={isError}
          />
          <Input
            register={register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
            type="password"
            placeholder="비밀번호"
            isError={isError}
          />
          <Input
            register={register('checkPassword', {
              required: '비밀번호를 확인해주세요.',
            })}
            type="password"
            placeholder="비밀번호 확인"
            isError={isError}
          />
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
