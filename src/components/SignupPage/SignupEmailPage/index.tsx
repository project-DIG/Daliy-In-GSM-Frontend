import * as S from './style';
import * as I from '../../../assets/svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Input from 'components/Common/Input';
import auth from 'api/auth';
import { toast } from 'react-toastify';

export default function SignupEmailPage() {
  const { register, handleSubmit } = useForm();
  const [isError, setIsError] = useState(false);
  const [authenticationMailInput, setAuthenticationMailInput] = useState('');
  const [email, setEmail] = useState('');
  const [canLogin, setCanLogin] = useState(false);

  const onChangeAuthenticationMailInput = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAuthenticationMailInput(e.target.value);
    console.log(authenticationMailInput);
  };

  const confirmAuthenticationMail = async (email: string, code: string) => {
    try {
      console.log(email, code);
      const res: any = await auth.emailCheck(email, code);
      setCanLogin(true);
      toast.success('인증되었습니다!', { autoClose: 2000 });
      console.log('성공', res);
    } catch (error: any) {
      toast.error('인증번호를 다시 확인해주세요.', { autoClose: 2000 });
      console.log(error);
      setCanLogin(false);
    }
  };

  const onValid = async (data: any) => {
    try {
      setIsError(false);
      console.log(data.email);
      setEmail(data.email);
      const res: any = await auth.getAuthenticationMail(data.email);
      toast.success('인증코드를 보냈습니다!', {
        autoClose: 2000,
      });
      console.log(res);
    } catch (error: any) {
      console.log(error.response.status);
      setCanLogin(false);
      switch (error.response.status) {
        case 400:
          toast.error('진행중인 인증이 있습니다.', { autoClose: 2000 });
          break;
        case 409:
          toast.error('이미 사용중인 이메일입니다.', { autoClose: 2000 });
          break;
        case 410:
          toast.error('잘못된 이메일 형식입니다', { autoClose: 2000 });
          break;
      }
    }
  };
  const inValid = (error: any) => {
    setIsError(true);
    console.log(error);
  };
  return (
    <S.SignupLayout>
      <S.SignupSection>
        <Link to="/signin">
          <I.Back />
        </Link>
        <S.LetsStart>
          Let's
          <br />
          Start!
        </S.LetsStart>
        <S.EmailForm>
          <S.EmailText>@gsm.hs.kr</S.EmailText>
          <S.EmailBox onSubmit={handleSubmit(onValid, inValid)}>
            <Input
              register={register('email', {
                required: '이메일 입력해주세요.',
              })}
              email={true}
              type="text"
              isError={isError}
            />
            <S.EmailButton>인증하기</S.EmailButton>
          </S.EmailBox>
          <S.AuthenticationBox>
            <S.Input
              onChange={onChangeAuthenticationMailInput}
              type="text"
              placeholder="인증번호"
              isError={isError}
            />
            <S.Check
              onClick={() =>
                confirmAuthenticationMail(email, authenticationMailInput)
              }
            >
              확인
            </S.Check>
          </S.AuthenticationBox>
        </S.EmailForm>
        <S.SignBox>
          {canLogin ? (
            <Link to="/signup">
              <I.LoginButton />
            </Link>
          ) : (
            <I.CantLogin />
          )}
        </S.SignBox>
      </S.SignupSection>
    </S.SignupLayout>
  );
}
