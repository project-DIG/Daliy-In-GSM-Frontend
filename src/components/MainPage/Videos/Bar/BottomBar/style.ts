import styled from '@emotion/styled';

export const BottomBar = styled.section`
  position: absolute;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
  bottom: 0;
  width: 100%;
  height: 7rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Title = styled.p`
  width: 89%;
  margin: auto;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  color: white;
  margin-bottom: 1.4rem;
`;

export const UserInfo = styled.div`
  width: 90%;
  border-radius: 20px;
  z-index: 40;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50px;
  cursor: pointer;
`;

export const Name = styled.p`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const Button = styled.div`
  .mainpage-btn {
    width: 70px;
    height: 32px;
    line-height: 32px;
    color: #ffffff;
    border: 1.5px solid #d5b2e1;
    background-color: #d5b2e1;

    :hover {
      background-color: #ffb3ff;
      border: 1.5px solid #ffb3ff;
    }
  }
`;
