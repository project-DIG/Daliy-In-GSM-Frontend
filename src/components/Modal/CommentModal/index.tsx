import { commentModalAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from 'assets/svg';
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
        <S.Comment>
          <I.ModalComment />
          <p>댓글</p>
          <S.Close></S.Close>
        </S.Comment>
        <S.CommentInputWrap>
          <S.CommentInput placeholder="댓글 추가" />
          <S.Button>입력</S.Button>
        </S.CommentInputWrap>
        <S.Comments>
          <S.ProfileWrap>
            <S.Profile />
            <S.Name>강민제</S.Name>
          </S.ProfileWrap>
          <S.Contents>
            안녕안녕 하세요 asdnfakfmsdkasfnlamdnkasmfnaskdnbajfkndsdbjaknsdbj
          </S.Contents>
        </S.Comments>
        <S.Comments>
          <S.ProfileWrap>
            <S.Profile />
            <S.Name>강민제</S.Name>
          </S.ProfileWrap>
          <S.Contents>안녕안녕 하세요 </S.Contents>
        </S.Comments>
      </S.Modal>
    </>
  );
}
