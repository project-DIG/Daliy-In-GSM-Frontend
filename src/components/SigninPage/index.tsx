import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
import Input from 'components/Common/Input';
import { useForm } from 'react-hook-form';
import { SigninInterface } from 'types/auth';
import { useState } from 'react';
export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInterface>();
  const [isError, setIsError] = useState(false);

  const onValid = (data: SigninInterface) => {
    console.log(data);
  };

  const inValid = (error: any) => {
    console.log(error);
    setIsError(true);
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
            minLength: {
              value: 6,
              message: '6자를 모두 입력해 주세요',
            },
          })}
          type="text"
          email={true}
          isError={isError}
        />
        <S.ErrorMessageLayout>
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
        </S.ErrorMessageLayout>
        <Input
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: {
              message: '영문, 숫자, 기호 포함 8~20자',
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            },
            maxLength: {
              value: 20,
              message: '영문, 숫자, 기호 포함 8~20자',
            },
            minLength: {
              value: 8,
              message: '영문, 숫자, 기호 포함 8~20자',
            },
          })}
          type="password"
          placeholder="비밀번호"
          isError={isError}
        />
        <S.ErrorMessageLayout>
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.ErrorMessageLayout>
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
