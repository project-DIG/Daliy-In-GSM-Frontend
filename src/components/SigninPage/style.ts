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
  margin-bottom: 30px;
`;

export const SigninBox = styled.div`
  width: 100%;
  height: 360px;
  background-color: white;
  position: absolute;
  bottom: 0;
  border-radius: 80px 80px 0 0;
  box-shadow: 0 -20px 0 #d8e6f3;
  text-align: center;
  padding: 90px 0;
  span {
    width: 360px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const SignWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: 'Karla', sans-serif;
  font-style: normal;
  font-weight: 800;
`;

export const Signin = styled.p`
  font-size: 24px;
`;
export const Signup = styled.p`
  font-size: 14px;
  color: #7a7a7a;
  margin-top: 70px;
  margin-left: -10px;
`;
