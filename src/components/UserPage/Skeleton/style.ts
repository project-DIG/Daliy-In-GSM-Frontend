import styled from '@emotion/styled';

export const UserInfoSectionLayout = styled.section`
  width: 86.4%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 62px;

  @-webkit-keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

export const UserProfile = styled.div`
  width: 153px;
  height: 153px;
  border-radius: 500px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const UserValues = styled.div`
  margin-top: 12px;
  width: 143px;
  height: 60px;
  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const FollowButton = styled.div`
  width: 432px;
  height: 40px;
  margin: auto;
  border-radius: 4px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const Category = styled.div`
  width: 86.4%;
  padding-top: 45px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 90px;
  height: 60px;

  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;

  &.first {
    -webkit-animation: skeleton-gradient 1s infinite ease-in-out;
    animation: skeleton-gradient 1s infinite ease-in-out;
  }

  &.second {
    -webkit-animation: skeleton-gradient 1.2s infinite ease-in-out;
    animation: skeleton-gradient 1.2s infinite ease-in-out;
  }

  &.third {
    -webkit-animation: skeleton-gradient 1.4s infinite ease-in-out;
    animation: skeleton-gradient 1.4s infinite ease-in-out;
  }
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

export const Video = styled.div`
  width: 100%;
  height: 150px;

  -webkit-animation: skeleton-gradient 1.4s infinite ease-in-out;
  animation: skeleton-gradient 1.4s infinite ease-in-out;
`;
