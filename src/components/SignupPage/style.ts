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
  margin-top: 44px;
  margin-bottom: 40px;
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
  font-weight: 500;
  &:focus {
    border-color: #375dbb;
    outline: #375dbb;
  }
  &::placeholder {
    text-align: center;
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
  color: white;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  &:hover {
    background-color: white;
    color: #7e9ce8;
    transition: 0.3s;
    transform: translateY(-4px);
    box-shadow: 0 4px 0 #7e9ce8;
  }
  &:active {
    transition: 0s;
    transform: translateY(0);
    box-shadow: inset 0 2px 2px #7e9ce8;
  }
`;

export const AuthenticationBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SignBox = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
  button {
    cursor: pointer;
    border: 0;
    background-color: white;
    height: 0px;
  }
`;
export const SignWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 700;
`;

export const Signup = styled.p`
  font-size: 26px;
  letter-spacing: -0.1em;
`;
export const Signin = styled.p`
  font-size: 15px;
  color: #8a8a8a;
  margin-top: 60px;
  margin-left: 2px;
`;

export const ErrorMessage = styled.div`
  margin: -16px 0 20px 4px;
  color: #cc3636;
`;
