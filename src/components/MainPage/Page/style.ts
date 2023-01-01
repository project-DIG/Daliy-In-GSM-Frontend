import styled from '@emotion/styled';

export const MainPageLayout = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  grid-template-columns: repeat(1, 1fr);
  overflow: auto;
  scroll-snap-type: y mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const VideoSection = styled.section`
  margin: auto;
  position: relative;
  width: 92%;
  height: 87vh;
  padding-top: 10vh;
`;

export const Line = styled.div`
  width: 95%;
  height: 4px;
  background-color: #e0e0d1;
  margin: 1.7rem auto;
`;

export const MainBg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  scroll-snap-align: start;
`;
