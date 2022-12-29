import * as S from './style';
interface Props extends React.HTMLAttributes<HTMLInputElement> {
  register?: any;
  email?: boolean;
  isError?: boolean;
  [x: string]: any;
}
export default function Input({ email, isError, register, ...rest }: Props) {
  return (
    <S.Input
      isError={isError}
      maxLength={email ? '6' : ''}
      {...rest}
      {...register}
    />
  );
}
