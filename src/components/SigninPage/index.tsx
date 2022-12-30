import * as S from './style';
import * as I from '../../assets/svg';
import { Link, useNavigate } from 'react-router-dom';
import Input from 'components/Common/Input';
import { useForm } from 'react-hook-form';
import { SigninInterface } from 'types/auth';
import { useState } from 'react';
import auth from 'api/auth';
import { toast } from 'react-toastify';
import tokenService from 'utils/tokenService';
export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInterface>();
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const onValid = async (data: SigninInterface) => {
    try {
      const res: any = await auth.signin(data.email, data.password);
      setIsError(false);
      toast.success('로그인에 성공했습니다!', { autoClose: 2000 });
      navigate('/');
      tokenService.setUser(res.data);
    } catch (error: any) {
      switch (error.response.status) {
        case 400:
          toast.error('가입된 계정이 아닙니다.', { autoClose: 2000 });
          break;
        case 401:
          toast.error('비밀번호가 틀렸습니다.', { autoClose: 2000 });
          break;
      }
    }
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
            pattern: {
              message: '잘못된 이메일 형식입니다.',
              value: /^s[0-9]+$/,
            },
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
