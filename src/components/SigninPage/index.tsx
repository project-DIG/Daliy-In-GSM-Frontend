import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
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
      <S.SigninBox></S.SigninBox>
    </S.SigninLayout>
  );
}
