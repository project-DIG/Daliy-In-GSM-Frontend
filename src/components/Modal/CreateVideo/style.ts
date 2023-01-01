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
`;

export const Text = styled.p`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;

export const InputBox = styled.div`
  width: 86%;
  height: 42px;
  text-align: center;
  margin: 6rem auto 0;
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

export const UploadBox = styled.div`
  width: 100%;
  height: calc(80vh - (42px + 6rem + 3rem + 35px + 4rem));
  margin-top: 4rem;
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -20px 0 #d8e6f3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
