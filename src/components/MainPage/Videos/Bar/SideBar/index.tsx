import * as S from './style';
import * as I from 'assets/svg';
import { useRecoilState } from 'recoil';
import { commentModalAtom } from 'atoms';

interface SideBarProps {
  id: number;
  like: number;
  dislike: number;
}

function VideoSideBar({ ...Props }: SideBarProps) {
  const [commentModal, setCommentModal] = useRecoilState(commentModalAtom);

  return (
    <>
      <S.VideoSideBar>
        <S.Sound className="sound-control">
          <I.SoundMute />
        </S.Sound>
        <S.Interaction>
          <S.SvgBox>
            <I.Like />
            <S.Value>{Props.like}</S.Value>
          </S.SvgBox>
          <S.SvgBox>
            <I.DisLike />
            <S.Value>{Props.dislike}</S.Value>
          </S.SvgBox>
          <S.SvgBox>
            <S.CmmentWrap
              onClick={() => {
                setCommentModal(!commentModal);
              }}
            >
              <I.Comment />
            </S.CmmentWrap>
            <S.Value>231</S.Value>
          </S.SvgBox>
        </S.Interaction>
      </S.VideoSideBar>
    </>
  );
}

export default VideoSideBar;
