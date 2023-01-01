import { createVideoModalAtom } from 'atoms';
import ModalLayout from 'components/Layout/Modal';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from 'assets/svg';
import FollowButton from 'components/Common/FollowButton';

function CreateVideoModal() {
  const [, setCreateVideoModal] = useRecoilState(createVideoModalAtom);
  const [url, setUrl] = useState<string>('');
  const [fileIsIn, setFileIsIn] = useState<boolean>(false);

  const setVideo = useRef<any>(null);

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setVideo.current?.click();
  };

  const handleChange = (e: any) => {
    setFileIsIn(true);
    setUrl(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
  };

  const removeFile = () => {
    setUrl('');
    setFileIsIn(false);
  };

  return (
    <ModalLayout setModal={setCreateVideoModal}>
      <S.Modal onClick={e => e.stopPropagation()}>
        <S.Topbar>
          <FollowButton className="upload-btn">업로드</FollowButton>
          <div onClick={() => setCreateVideoModal(false)}>
            <I.ExitModal />
          </div>
        </S.Topbar>
        <S.InputBox>
          <S.Title placeholder="제목을 입력하세요" />
        </S.InputBox>

        <S.UploadVideoBox>
          <div onClick={imgBtnClick}>{!url && <I.UploadButton />}</div>
          <input
            ref={setVideo}
            type={'file'}
            id={'profile'}
            accept={'video/*'}
            name={'file'}
            onChange={handleChange}
          />
          <S.Video fileIsIn={fileIsIn}>
            {url && (
              <>
                <video src={url} controls width="100%" height="100%" />
                <S.RemoveFile onClick={removeFile}>
                  <I.ExitModal />
                </S.RemoveFile>
              </>
            )}
          </S.Video>
        </S.UploadVideoBox>
      </S.Modal>
    </ModalLayout>
  );
}

export default CreateVideoModal;
