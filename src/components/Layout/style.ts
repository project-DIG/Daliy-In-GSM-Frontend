import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  width: 100%;
`;

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  margin: auto;
  background-color: white;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BackGroundImage = styled.img`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
