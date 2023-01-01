import { commentModalAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import * as S from './style';

export default function CommentModal() {
  const [commentModal, setCommentModal] = useRecoilState(commentModalAtom);
  return (
    <>
      <S.Bg
        onClick={() => {
          setCommentModal(!commentModal);
        }}
      />
      <S.Modal commentModal={commentModal}>
        <S.Comment>댓글</S.Comment>
        <S.CommentInputWrap>
          <S.CommentInput placeholder="댓글 추가" />
          <S.Button>입력</S.Button>
        </S.CommentInputWrap>
      </S.Modal>
    </>
  );
}
