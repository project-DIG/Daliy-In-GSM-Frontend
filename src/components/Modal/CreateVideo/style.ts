import styled from '@emotion/styled';

export const Modal = styled.section`
  width: 88%;
  max-width: 550px;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
`;

export const Topbar = styled.div`
  width: 86%;
  margin: 3rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div > svg {
    cursor: pointer;
  }

  .upload-btn {
    width: 60px;
    margin: 0;
  }
`;

export const InputBox = styled.div`
  width: 86%;
  height: 42px;
  text-align: center;
  margin: 4rem auto 0;
  box-sizing: border-box;
  border-bottom: 1px solid black;
`;

export const Title = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;

export const UploadVideoBox = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 4rem;
  height: calc(80vh - (77px + 11rem));
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -20px 0 #d8e6f3;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

  input {
    display: none;
  }

  svg {
    cursor: pointer;
  }
`;

export const Video = styled.div<{ fileIsIn: boolean }>`
  position: relative;
  display: ${e => (e.fileIsIn ? '' : 'none')};
  width: 90%;
  height: 90%;

  video {
    border-radius: 10px;
  }
`;

export const RemoveFile = styled.div`
  position: absolute;
  top: 3%;
  right: 5%;
  z-index: 100;
`;
