import FollowButton from 'components/Common/FollowButton';
import * as S from './style';
interface BottomBarProps {
  title: string;
  tag: string;
  name: string;
}
function VideoBottomBar({ ...Props }: BottomBarProps) {
  return (
    <S.BottomBar>
      <S.Title>{Props.title}</S.Title>
      <S.UserInfo>
        <S.User>
          <S.Profile src="https://i.ytimg.com/vi/W4LqXqQVJ-M/maxresdefault.jpg" />
          <S.Name>{Props.name}</S.Name>
        </S.User>
        <S.Button>
          <FollowButton className="mainpage-btn">팔로우</FollowButton>
        </S.Button>
      </S.UserInfo>
    </S.BottomBar>
  );
}

export default VideoBottomBar;
