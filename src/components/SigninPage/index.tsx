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
      </S.SigninSection>
    </S.SigninLayout>
  );
}
