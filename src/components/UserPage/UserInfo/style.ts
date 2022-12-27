import styled from '@emotion/styled';

export const UserInfoSectionLayout = styled.section`
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
