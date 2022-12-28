import * as S from './style';
interface Props extends React.HTMLAttributes<HTMLInputElement> {
  register?: any;
  email?: boolean;
  [x: string]: any;
}
export default function Input({ email, register, ...rest }: Props) {
  return <S.Input maxLength={email ? '6' : ''} {...rest} {...register} />;
}
