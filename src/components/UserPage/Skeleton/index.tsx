import * as S from './style';
import uuid from 'react-uuid';

function Skeleton() {
  const skeleton = () => {
    const returnList: any[] = [];
    for (let i = 0; i < 12; i++) {
      returnList.push(<S.Video key={uuid()} />);
    }
    return returnList;
  };
  return (
    <>
      <S.UserInfoSectionLayout>
        <S.UserProfile />
        <S.UserValues />
      </S.UserInfoSectionLayout>
      <S.FollowButton />
      <S.Category>
        <S.Box className="first" />
        <S.Box className="second" />
        <S.Box className="third" />
      </S.Category>
      <S.VideoSection>{skeleton()}</S.VideoSection>
    </>
  );
}

export default Skeleton;
