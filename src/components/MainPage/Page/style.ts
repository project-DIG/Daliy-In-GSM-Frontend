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
