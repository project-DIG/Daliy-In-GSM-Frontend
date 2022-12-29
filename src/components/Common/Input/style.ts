import styled from '@emotion/styled';

export const Input = styled.input<{ isError: boolean }>`
  width: 316px;
  height: 60px;
  border: ${e => (e.isError ? '2px solid #FF9090' : '2px solid #9fb6ee')};
  border-radius: 16px;
  font-size: 16px;
  padding: 0 20px;
  margin-bottom: 20px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  &:focus {
    border-color: ${e => (e.isError ? '#CC3636' : '#375dbb')};
    outline: #375dbb;
  }
`;
