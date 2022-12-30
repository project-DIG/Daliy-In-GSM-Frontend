import styled from '@emotion/styled';

export const SigninLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const SigninSection = styled.section`
  padding-top: 15%;
  width: 360px;
  height: 80%;
  margin: auto;
  p {
    color: #7e7e7e;
    font-weight: 600;
  }
`;
export const WelcomeBack = styled.div`
  font-family: 'Changa One';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 53px;
  color: #6c8ee5;
  margin-top: 64px;
  margin-bottom: 49px;
`;

export const SigninBox = styled.form`
  width: 100%;
  height: 360px;
  background-color: white;
  position: absolute;
  bottom: 0;
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -20px 0 #d8e6f3;
  text-align: center;
  padding: 90px 0;
  align-items: center;
  span {
    position: absolute;
    bottom: 17%;
    left: 15%;
    width: 72%;
    display: flex;
    justify-content: space-between;
  }
  button {
    cursor: pointer;
    border: 0;
    background-color: white;
    height: 0px;
    &:hover {
      & svg {
        transition: 0.5s;
        width: 114px;
        height: 114px;
        margin-top: -4px;
        margin-right: -4px;
      }
    }
    &:active {
      & svg {
        transition: 0ms;
        width: 108px;
        height: 108px;
      }
    }
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

export const Signin = styled.p`
  font-size: 26px;

  letter-spacing: -0.1em;
`;
export const Signup = styled.p`
  font-size: 15px;
  color: #8a8a8a;
  margin-top: 70px;
  margin-left: -4px;
`;

export const ErrorMessage = styled.div`
  margin: -16px 170px 16px 0;
  color: #ff9090;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 500;
`;

export const ErrorMessageLayout = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 76px;
`;
