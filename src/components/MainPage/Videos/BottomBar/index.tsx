import FollowButton from 'components/Common/FollowButton';
import * as S from './style';

function VideoBottomBar() {
  return (
    <S.BottomBar>
      <S.Title>GSM 일상</S.Title>
      <S.UserInfo>
        <S.User>
          <S.Profile src="https://i.ytimg.com/vi/W4LqXqQVJ-M/maxresdefault.jpg" />
          <S.Name>오종진</S.Name>
        </S.User>
        <S.Button>
          <FollowButton className="mainpage-btn">팔로우</FollowButton>
        </S.Button>
      </S.UserInfo>
    </S.BottomBar>
  );
}

export default VideoBottomBar;
