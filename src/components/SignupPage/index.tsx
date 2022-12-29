import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
import Input from 'components/Common/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SignupInterface } from 'types/auth';
import auth from 'api/auth';

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupInterface>();
  const [isError, setIsError] = useState(false);

  const onValid = async (data: any) => {
    if (data.password === data.checkPassword) {
      try {
        setIsError(false);
        console.log(data);
      } catch (error: any) {
        console.log(error);
      }
    } else {
      setIsError(true);
      setError('checkPassword', { message: '비밀번호가 일치하지 않습니다.' });
    }
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
          <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
          <Input
            register={register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                message: '영문, 숫자, 기호 포함 8~20자',
                value: 8,
              },
              maxLength: {
                message: '비밀번호는 최대 20자 입니다.',
                value: 20,
              },
              pattern: {
                message: '잘못된 비밀번호 형식이에요.',
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              },
            })}
            type="password"
            placeholder="비밀번호"
            isError={isError}
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          <Input
            register={register('checkPassword', {
              required: '비밀번호를 확인해주세요.',
              pattern: {
                message: '비밀번호를 다시 확인해주세요',
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              },
            })}
            type="password"
            placeholder="비밀번호 확인"
            isError={isError}
          />
          <S.ErrorMessage>{errors.checkPassword?.message}</S.ErrorMessage>
          <S.SignBox>
            <S.SignWrap>
              <S.Signup>회원가입</S.Signup>
              <Link to="/signin">
                <S.Signin>로그인</S.Signin>
              </Link>
            </S.SignWrap>
            <button>
              <I.LoginButton />
            </button>
          </S.SignBox>
        </form>
      </S.SignupSection>
    </S.SignupLayout>
  );
}
