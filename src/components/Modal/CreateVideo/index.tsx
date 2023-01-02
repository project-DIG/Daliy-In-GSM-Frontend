import { createVideoModalAtom } from 'atoms';
import ModalLayout from 'components/Layout/Modal';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from 'assets/svg';
import FollowButton from 'components/Common/FollowButton';
import useInputs from 'hooks/useInputs';
import video from 'api/video';

function CreateVideoModal() {
  const [, setCreateVideoModal] = useRecoilState(createVideoModalAtom);
  const [url, setUrl] = useState<string>('');
  const [fileIsIn, setFileIsIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>();
  const [{ title }, onChange, setNull] = useInputs({
    title: '',
  });

  const setVideo = useRef<any>(null);

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setVideo.current?.click();
  };

  const handleChange = (e: any) => {
    setFileIsIn(true);
    setUrl(URL.createObjectURL(e.target.files[0]));
    const form = new FormData();
    setFormData(form.append('video', e.target.files[0]));
    console.log(formData);
  };

  const removeFile = () => {
    setUrl('');
    setFileIsIn(false);
    setFormData(null);
  };

  const upload = async () => {
    try {
      const res: any = await video.createVideo(title, formData);
      console.log(res);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <ModalLayout setModal={setCreateVideoModal}>
      <S.Modal onClick={e => e.stopPropagation()}>
        <S.Topbar>
          <FollowButton className="upload-btn" onClick={upload}>
            업로드
          </FollowButton>
          <div onClick={() => setCreateVideoModal(false)}>
            <I.ExitModal />
          </div>
        </S.Topbar>
        <S.InputBox>
          <S.Title
            placeholder="제목을 입력하세요"
            name="title"
            value={title}
            onChange={onChange}
          />
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
