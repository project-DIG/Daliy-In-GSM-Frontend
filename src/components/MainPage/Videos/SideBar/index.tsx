import * as S from './style';
import * as I from 'assets/svg';

function VideoSideBar() {
  return (
    <S.VideoSideBar>
      <S.Sound className="sound-control">
        <I.SoundMute />
      </S.Sound>
      <S.Interaction>
        <S.SvgBox>
          <I.Like />
          <S.Value>120</S.Value>
        </S.SvgBox>
        <S.SvgBox>
          <I.DisLike />
          <S.Value>1223</S.Value>
        </S.SvgBox>
        <S.SvgBox>
          <I.Comment />
          <S.Value>231</S.Value>
        </S.SvgBox>
      </S.Interaction>
    </S.VideoSideBar>
  );
}

export default VideoSideBar;
