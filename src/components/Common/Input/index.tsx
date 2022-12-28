import * as S from './style';
interface Props extends React.HTMLAttributes<HTMLInputElement> {
  register?: any;
  [x: string]: any;
}
export default function Input({ register, ...rest }: Props) {
  return <S.Input {...rest} {...register} />;
}
