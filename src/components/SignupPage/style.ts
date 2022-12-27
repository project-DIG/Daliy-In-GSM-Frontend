import styled from '@emotion/styled';

export const SignupLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const SignupSection = styled.section`
  padding-top: 15%;
  width: 360px;
  height: 80%;
  margin: auto;
`;
export const LetsStart = styled.div`
  font-family: 'Changa One';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 53px;
  color: #6c8ee5;
  margin-top: 64px;
  margin-bottom: 60px;
`;

export const EmailText = styled.p`
  margin-top: 20px;
  left: 156px;
  font-size: 18px;
  color: #7e7e7e;
  position: absolute;
`;
export const Input = styled.input`
  width: 126px;
  height: 60px;
  border: 2px solid #9fb6ee;
  border-radius: 16px;
  font-size: 16px;
  padding: 0 20px;
  margin-bottom: 20px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  &:focus {
    border-color: #375dbb;
    outline: #375dbb;
  }
`;

export const Check = styled.button`
  cursor: pointer;
  width: 170px;
  height: 64px;
  border-radius: 16px;
  background-color: #9fb6ee;
  outline: 2px Solid #7e9ce8;
  border: none;
`;

export const AuthenticationBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
