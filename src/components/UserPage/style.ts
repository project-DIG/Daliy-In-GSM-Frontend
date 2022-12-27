import styled from '@emotion/styled';

export const UserPageLayout = styled.div`
  width: 100%;
  margin-top: 39px;
`;

export const UserInfoSection = styled.section`
  width: 86.4%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 62px;
`;

export const UserProfile = styled.img`
  width: 153px;
  height: 153px;
  border-radius: 500px;
  object-fit: cover;
`;

export const UserValues = styled.div`
  margin-top: 12px;
`;

export const UserName = styled.p`
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-style: normal;
  text-align: right;
  font-weight: 500;
  font-size: 26px;
  color: #000000;
`;

export const Follow = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 13px;
`;

export const FollowBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  p.key {
    color: #666666;
  }
`;

export const Value = styled.p`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #464646;
`;

export const FollowButton = styled.div`
  width: 432px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: auto;
  border-radius: 4px;
  border: 1.5px solid #d5b2e1;
  cursor: pointer;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #d5b2e1;
  transition: 0.2s;

  :hover {
    border: 1.5px solid #d5b2e1;
    color: white;
    background-color: #d5b2e1;

    transition: 0.2s;
  }
`;

export const Category = styled.div`
  width: 88%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 120px;
  text-align: center;

  & > svg {
    margin-bottom: 10px;
    height: 40px;

    > * {
      fill: #454545;
      transition: 0.2s;
    }
  }

  &.user {
    > div {
      display: block;
    }
    > svg > * {
      fill: #d9d9d9;
    }
  }
  &.like {
    > div {
      display: block;
    }
    > svg > * {
      fill: #6c8ee5;
    }
  }
  &.dislike {
    > div {
      display: block;
    }
    > svg > * {
      fill: #ff9090;
    }
  }
`;

export const BottomLine = styled.div`
  display: none;
  width: 100%;
  height: 6px;
  background-color: #d5b2e1;
  border-radius: 20px;
`;

export const VideoSection = styled.div`
  width: 95%;
  margin: auto;
  display: grid;
  gap: 13px 13px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  margin-bottom: 20px;
`;
