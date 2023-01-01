import { createVideoModalAtom } from 'atoms';
import ModalLayout from 'components/Layout/Modal';
import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from 'assets/svg';

function CreateVideoModal() {
  const [, setCreateVideoModal] = useRecoilState(createVideoModalAtom);

  return (
    <ModalLayout setModal={setCreateVideoModal}>
      <S.Modal onClick={e => e.stopPropagation()}>
        <S.Topbar>
          <S.Text>업로드</S.Text>
          <div onClick={() => setCreateVideoModal(false)}>
            <I.ExitModal />
          </div>
        </S.Topbar>
        <S.InputBox>
          <S.Title placeholder="제목을 입력하세요" />
        </S.InputBox>
        <S.UploadBox>
          <I.UploadButton />
        </S.UploadBox>
      </S.Modal>
    </ModalLayout>
  );
}

export default CreateVideoModal;
