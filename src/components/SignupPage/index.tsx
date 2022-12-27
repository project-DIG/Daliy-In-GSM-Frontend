import * as S from './style';
import * as I from '../../assets/svg';
import { Link } from 'react-router-dom';
export default function SignupPage() {
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
      </S.SignupSection>
    </S.SignupLayout>
  );
}
