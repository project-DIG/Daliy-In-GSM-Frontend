import styled from '@emotion/styled';

export const VideoLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  scroll-snap-align: start;
`;

export const VideoBox = styled.section`
  margin: auto;
  position: relative;
  width: 92%;
  height: 87vh;
  padding-top: 9.2vh;
`;

export const Video = styled.video`
  object-fit: cover;
  border-radius: 20px;
`;

export const Line = styled.div`
  width: 95%;
  height: 4px;
  background-color: #e0e0d1;
  margin: 1.3rem auto;
`;
